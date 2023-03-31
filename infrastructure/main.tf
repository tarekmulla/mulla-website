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

module "acm_certificate" {
  source      = "./modules/certificate"
  domain_name = var.domain
  SAN_domains = ["api.${var.domain}"]
  zone_id     = data.aws_route53_zone.domain_zone.zone_id
  tags        = var.tags
}

module "cloudfront_certificate" {
  source      = "./modules/certificate"
  domain_name = var.domain
  SAN_domains = ["api.${var.domain}"]
  zone_id     = data.aws_route53_zone.domain_zone.zone_id
  tags        = var.tags
  providers = {
    aws = aws.virginia # cloudfront certificate should be created in us-east-1
  }
}

module "website_bucket" {
  source              = "./modules/website"
  app                 = var.app
  domain              = var.domain
  acm_certificate_arn = module.cloudfront_certificate.arn
  tags                = local.tags
}

module "dns" {
  source         = "./modules/dns"
  route53_domain = var.domain
  zone_id        = data.aws_route53_zone.domain_zone.id
  # bucket_domain  = module.website_bucket.bucket_domain
  # hosted_zone_id = module.website_bucket.hosted_zone_id
  cloudfront_domain         = module.website_bucket.cloudfront_domain
  cloudfront_hosted_zone_id = module.website_bucket.cloudfront_hosted_zone_id
  tags                      = var.tags
}
