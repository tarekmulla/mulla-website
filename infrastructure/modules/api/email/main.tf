resource "aws_api_gateway_method" "email" {
  rest_api_id   = var.api_id
  resource_id   = var.resource_id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "email_lambda_integration" {
  rest_api_id = var.api_id
  resource_id = aws_api_gateway_method.email.resource_id
  http_method = aws_api_gateway_method.email.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = module.email_lambda.lambda_function_invoke_arn
}
