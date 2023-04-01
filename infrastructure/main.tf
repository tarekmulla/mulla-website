provider "aws" {
  region = var.region
}

provider "aws" {
  region = "us-east-1"
  alias  = "virginia"
}

data "aws_route53_zone" "domain_zone" {
  name = var.domain
}

module "cloudfront_waf" {
  source = "./modules/waf"
  app    = var.app
  tags   = var.tags
  providers = {
    aws = aws.virginia # cloudfront waf should be created in us-east-1
  }
}

module "acm_certificate" {
  source      = "./modules/certificate"
  domain_name = var.domain
  SAN_domains = ["api.${var.domain}", "*.${var.domain}"]
  zone_id     = data.aws_route53_zone.domain_zone.zone_id
  tags        = var.tags
}

module "cloudfront_certificate" {
  source      = "./modules/certificate"
  domain_name = var.domain
  SAN_domains = ["api.${var.domain}", "*.${var.domain}"]
  zone_id     = data.aws_route53_zone.domain_zone.zone_id
  tags        = var.tags
  providers = {
    aws = aws.virginia # cloudfront certificate should be created in us-east-1
  }
}

module "website_bucket" {
  source = "./modules/website"
  app    = var.app
  domain = var.domain
  tags   = local.tags
}

module "cdn" {
  source              = "./modules/cdn"
  app                 = var.app
  domain              = var.domain
  acm_certificate_arn = module.cloudfront_certificate.arn
  waf_arn             = module.cloudfront_waf.arn
  logging_bucket      = module.website_bucket.bucket_domain_name
  origin              = module.website_bucket.bucket_regional_domain_name
  tags                = local.tags
}

module "dns" {
  source                    = "./modules/dns"
  route53_domain            = var.domain
  zone_id                   = data.aws_route53_zone.domain_zone.id
  cloudfront_domain         = module.cdn.cloudfront_domain
  cloudfront_hosted_zone_id = module.cdn.cloudfront_hosted_zone_id
  tags                      = var.tags
}

module "policies" {
  source             = "./modules/policies"
  app_bucket_arn     = module.website_bucket.arn
  app_bucket_id      = module.website_bucket.id
  cloudfront_oai_arn = module.cdn.cloudfront_oai_arn
  tags               = var.tags
}
