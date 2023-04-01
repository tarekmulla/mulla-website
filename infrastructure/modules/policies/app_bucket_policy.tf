data "aws_iam_policy_document" "website_policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]
    principals {
      identifiers = [var.cloudfront_oai_arn]
      type        = "AWS"
    }
    resources = [
      "${var.app_bucket_arn}/*"
    ]
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = var.app_bucket_id
  policy = data.aws_iam_policy_document.website_policy.json
}
