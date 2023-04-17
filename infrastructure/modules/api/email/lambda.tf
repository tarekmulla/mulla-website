locals {
  function_name = "email"
  zip_path      = "${path.root}/../.tmp/${local.function_name}.zip"
}

data "archive_file" "lambda_source_package" {
  type        = "zip"
  source_dir  = "${path.module}/src/"
  output_path = local.zip_path
}

resource "aws_s3_object" "lambda_code_zip" {
  bucket = var.bucket_name
  key    = "lambda_zip/function/${local.function_name}"
  source = local.zip_path
  etag   = data.archive_file.lambda_source_package.output_md5
}

module "email_lambda" {
  depends_on = [aws_s3_object.lambda_code_zip]
  source     = "terraform-aws-modules/lambda/aws"
  version    = "4.14.0"

  function_name  = "${var.app}-email"
  description    = "lambda function to send an email"
  handler        = "index.handler"
  runtime        = "nodejs14.x"
  create_package = false
  s3_existing_package = {
    bucket     = var.bucket_name
    key        = aws_s3_object.lambda_code_zip.id
    version_id = aws_s3_object.lambda_code_zip.version_id
  }

  cloudwatch_logs_retention_in_days = 14

  environment_variables = {
    APP = var.app
  }

  tags = var.tags
}
