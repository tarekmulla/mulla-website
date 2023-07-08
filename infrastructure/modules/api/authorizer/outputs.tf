output "id" {
  description = "The authorizer id"
  value       = aws_api_gateway_authorizer.lambda_authorizer.id
}

output "lambda_authorizer_arn" {
  description = "The lambda authorizer function arn"
  value       = module.authorizer_lambda.lambda_function_arn
}
