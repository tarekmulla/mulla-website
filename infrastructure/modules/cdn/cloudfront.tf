locals {
  s3_origin_id  = "S3WebappOrigin"
  api_origin_id = "APIOrigin"
}

resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "s3-bucket-access"
  description                       = "OAC to access s3 bucket website files"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = var.origin
    origin_id                = local.s3_origin_id
    origin_path              = "/website"
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
  }

  origin {
    domain_name = replace(var.api_id, "/^https?://([^/]*).*/", "$1")
    origin_id   = local.api_origin_id
    origin_path = "/production"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  # web_acl_id          = var.waf_arn
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "cache for ${var.app} website"
  default_root_object = "index.html"

  logging_config {
    include_cookies = false
    bucket          = var.logging_bucket
    prefix          = "logs/cloudfront"
  }

  # If you have domain configured use it here
  aliases = [var.domain, "www.${var.domain}"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    origin_request_policy_id = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf"
    cache_policy_id          = "658327ea-f89d-4fab-a63d-7e88639e58f6"

    viewer_protocol_policy = "redirect-to-https"
  }

  ordered_cache_behavior {
    path_pattern     = "/api/*"
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "OPTIONS", "HEAD"]
    target_origin_id = local.api_origin_id
    compress         = false

    origin_request_policy_id = "216adef6-5c7f-47e4-b989-5492eafa07d3"
    cache_policy_id          = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"

    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  price_class = "PriceClass_200"

  tags = var.tags

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
