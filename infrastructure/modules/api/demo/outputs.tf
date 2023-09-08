output "method_id" {
  value = aws_api_gateway_method.demo.id
}

output "integration_id" {
  value = aws_api_gateway_integration.demo_lambda_integration.id
}

output "lambda_name" {
  description = "The lambda function name"
  value       = module.demo_lambda.lambda_function_name
}
