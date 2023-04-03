resource "aws_api_gateway_rest_api" "api" {
  name        = var.app
  description = "API for ${var.app}"
  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_resource" "email" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  parent_id   = aws_api_gateway_rest_api.api.root_resource_id
  path_part   = "email"
}

# Each method has a separate module block
module "email" {
  source       = "./email"
  app          = var.app
  api_id       = aws_api_gateway_rest_api.api.id
  resource_id  = aws_api_gateway_resource.email.id
  api_exec_arn = aws_api_gateway_rest_api.api.execution_arn
  bucket_name  = var.bucket_name
  tags         = var.tags
}
