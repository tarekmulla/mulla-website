output "endpoint" {
  description = "The public API endpoint"
  value       = aws_api_gateway_deployment.api_deploy.invoke_url
}

output "regional_domain_name" {
  description = "The API regional domain name"
  value       = aws_api_gateway_domain_name.api.regional_domain_name
}

output "regional_zone_id" {
  description = "The API regional zone ID"
  value       = aws_api_gateway_domain_name.api.regional_zone_id
}

output "id" {
  description = "The API id"
  value       = aws_api_gateway_rest_api.api.id
}
