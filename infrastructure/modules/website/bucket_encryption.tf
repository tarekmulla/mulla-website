# enable SSE-KMS encryption in the bucket
resource "aws_kms_key" "s3_kms" {
  description             = "This key is used to encrypt website bucket objects"
  deletion_window_in_days = 10
  policy                  = data.aws_iam_policy_document.cloudfront_kms_policy.json
}
resource "aws_s3_bucket_server_side_encryption_configuration" "s3_encryption" {
  bucket = var.app_bucket_id

  rule {
    apply_server_side_encryption_by_default {
      kms_master_key_id = aws_kms_key.s3_kms.arn
      sse_algorithm     = "aws:kms"
    }
  }
}

data "aws_iam_policy_document" "cloudfront_kms_policy" {
  statement {
    sid    = "Enable IAM User Permissions"
    effect = "Allow"
    principals {
      identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"]
      type        = "AWS"
    }
    actions = [
      "kms:*"
    ]
    resources = [
      "*"
    ]
  }
  statement {
    sid    = "Allow CloudFront to use SSE-KMS"
    effect = "Allow"
    principals {
      identifiers = ["cloudfront.amazonaws.com"]
      type        = "Service"
    }
    actions = [
      "kms:Decrypt",
      "kms:Encrypt",
      "kms:GenerateDataKey*"
    ]
    resources = [
      "*"
    ]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [var.cloudfront_dist_arn]
    }
  }
  statement {
    sid    = "Allow CloudFront to log"
    effect = "Allow"
    principals {
      identifiers = ["delivery.logs.amazonaws.com"]
      type        = "Service"
    }
    actions = [
      "kms:Decrypt",
      "kms:Encrypt",
      "kms:GenerateDataKey*"
    ]
    resources = [
      "*"
    ]
  }
}
