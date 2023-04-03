output "endpoint" {
  description = "The public API endpoint"
  value       = aws_api_gateway_deployment.api_deploy.invoke_url
}

output "id" {
  description = "The API id"
  value       = aws_api_gateway_rest_api.api.id
}
