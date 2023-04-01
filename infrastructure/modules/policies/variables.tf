variable "tags" {
  description = "AWS Tags to add to all resources created (where possible)"
  type        = map(string)
}

variable "cloudfront_oai_arn" {
  description = "ARN for Cloudfront origin access identity IAM"
  type        = string
}

variable "app_bucket_arn" {
  description = "ARN for the app S3 bucket"
  type        = string
}

variable "app_bucket_id" {
  description = "ID for the app S3 bucket"
  type        = string
}
