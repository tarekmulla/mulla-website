data "aws_iam_policy_document" "website_policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]
    principals {
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
      type        = "AWS"
    }
    resources = [
      "${aws_s3_bucket.website.arn}/*"
    ]
  }
}
