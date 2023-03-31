resource "aws_kms_key" "website_key" {
  description             = "This key is used to encrypt website bucket objects"
  deletion_window_in_days = 10
}
