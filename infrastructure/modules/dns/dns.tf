# Add an IPv4 DNS record pointing to the loab balancer
resource "aws_route53_record" "ipv4" {
  zone_id = var.zone_id
  name    = var.route53_domain
  type    = "A"

  alias {
    name                   = var.cloudfront_domain
    zone_id                = var.cloudfront_hosted_zone_id
    evaluate_target_health = true
  }

  # alias {
  #   name                   = var.bucket_domain
  #   zone_id                = var.hosted_zone_id
  #   evaluate_target_health = false
  # }
}
