data "aws_iam_policy_document" "website_policy" {
  statement {
    sid = "Allow cloudfront OAC to access S3"
    actions = [
      "s3:GetObject"
      # ,
      # "s3:GetBucketAcl",
      # "s3:PutBucketAcl"
    ]
    principals {
      identifiers = ["cloudfront.amazonaws.com"]
      type        = "Service"
    }
    resources = [
      "${var.app_bucket_arn}/*"
    ]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [var.cloudfront_dist_arn]
    }
  }
  # statement {
  #   sid = "Allow cloudfront logs"
  #   actions = [
  #     "s3:GetObject",
  #     "s3:GetBucketAcl",
  #     "s3:PutBucketAcl"
  #   ]
  #   principals {
  #     identifiers = [var.cloudfront_oai_arn]
  #     type        = "AWS"
  #   }
  #   resources = [
  #     "${var.app_bucket_arn}/*"
  #   ]
  # }
}

resource "aws_s3_bucket_policy" "access" {
  bucket = var.app_bucket_id
  policy = data.aws_iam_policy_document.website_policy.json
}
