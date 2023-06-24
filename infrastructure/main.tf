provider "aws" {
  region = "us-east-1"
}

module "cloudfront_waf" {
  # Enable WAF for production only
  count  = terraform.workspace == "prod" ? 0 : 1
  source = "./modules/waf"
  app    = var.app
  tags   = local.tags
}

module "acm_certificate" {
  source      = "./modules/certificate"
  domain_name = var.domain
  SAN_domains = ["*.${var.domain}"]
  zone_id     = data.aws_route53_zone.domain_zone.zone_id
  tags        = local.tags
}

module "s3_bucket" {
  source = "./modules/bucket"
  app    = var.app
  domain = var.domain
  tags   = local.tags
}

module "lambda_layers" {
  source      = "./modules/lambda_layers"
  app         = var.app
  region      = var.region
  bucket_name = module.s3_bucket.id
  tags        = local.tags
}

module "cdn" {
  source              = "./modules/cdn"
  app                 = var.app
  region              = var.region
  domain              = var.domain
  acm_certificate_arn = module.acm_certificate.arn
  # WAF will be only available in production environment
  waf_arn        = terraform.workspace == "prod" ? module.cloudfront_waf.arn : null
  logging_bucket = module.s3_bucket.bucket_domain_name
  origin         = module.s3_bucket.bucket_regional_domain_name
  api_id         = module.api.endpoint
  tags           = local.tags
}

module "website" {
  source              = "./modules/website"
  app                 = var.app
  app_bucket_arn      = module.s3_bucket.arn
  app_bucket_id       = module.s3_bucket.id
  cloudfront_dist_arn = module.cdn.cloudfront_dist_arn
  tags                = local.tags
  depends_on = [
    module.s3_bucket,
    module.cdn
  ]
}

module "dns" {
  source                    = "./modules/dns"
  route53_domain            = var.domain
  zone_id                   = data.aws_route53_zone.domain_zone.id
  cloudfront_domain         = module.cdn.cloudfront_domain
  cloudfront_hosted_zone_id = module.cdn.cloudfront_hosted_zone_id
  tags                      = local.tags
}

module "api" {
  source            = "./modules/api"
  app               = var.app
  website_domain    = var.domain
  certificate_arn   = module.acm_certificate.arn
  bucket_name       = module.s3_bucket.id
  lambda_layer_arns = module.lambda_layers.layer_arns
  tags              = local.tags

  depends_on = [
    module.acm_certificate
  ]
}
