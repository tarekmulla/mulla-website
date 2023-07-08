resource "aws_api_gateway_authorizer" "lambda_authorizer" {
  name                             = "lambda_authorizer"
  rest_api_id                      = aws_api_gateway_rest_api.api.id
  authorizer_uri                   = var.api_authorizer_arn
  authorizer_credentials           = aws_iam_role.api_role.arn
  authorizer_result_ttl_in_seconds = 0 //TODO - Will be changing to 300 later to enable caching
  type                             = "TOKEN"
  identity_source                  = "method.request.header.x-api-key"
}
