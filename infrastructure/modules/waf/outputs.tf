output "arn" {
  description = "The arn for WAF"
  value       = aws_wafv2_web_acl.web_acl.arn
}
