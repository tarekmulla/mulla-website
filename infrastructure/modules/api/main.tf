resource "aws_api_gateway_rest_api" "api" {
  name        = var.app
  description = "API for ${var.app}"
  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_resource" "contact" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  parent_id   = aws_api_gateway_rest_api.api.root_resource_id
  path_part   = "contact"
}

# Each method has a separate module block
module "contact" {
  source            = "./contact"
  app               = var.app
  api_id            = aws_api_gateway_rest_api.api.id
  resource_id       = aws_api_gateway_resource.contact.id
  api_exec_arn      = aws_api_gateway_rest_api.api.execution_arn
  bucket_name       = var.bucket_name
  lambda_layer_arns = var.lambda_layer_arns
  tags              = var.tags
}
