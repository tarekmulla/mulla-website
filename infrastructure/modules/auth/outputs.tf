output "api_auth_token_name" {
  value = random_password.api_auth_token.result
}

output "authorizer_arn" {
  description = "The Invoke ARN of the Lambda authorizer"
  value       = module.authorizer_lambda.lambda_layer_arn
}
