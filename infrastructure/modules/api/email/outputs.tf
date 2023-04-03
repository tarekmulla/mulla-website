output "method_id" {
  value = aws_api_gateway_method.email.id
}

output "integration_id" {
  value = aws_api_gateway_integration.email_lambda_integration.id
}
