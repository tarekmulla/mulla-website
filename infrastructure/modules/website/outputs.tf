output "bucket_domain" {
  value = aws_s3_bucket_website_configuration.website_configuration.website_domain
}

output "hosted_zone_id" {
  value = aws_s3_bucket.website.hosted_zone_id
}

output "cloudfront_domain" {
  value = replace(aws_cloudfront_distribution.s3_distribution.domain_name, "/[.]$/", "")
}

output "cloudfront_hosted_zone_id" {
  value = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
}
