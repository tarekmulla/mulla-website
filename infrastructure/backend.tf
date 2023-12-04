terraform {
  required_version = "= 1.6.4"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.29.0"
    }
  }

  # S3 bucket to store the terraform state file remotly, the bucket should be created manually
  backend "s3" {
    bucket               = "terraform-state-mulla"
    key                  = "terraform.tfstate"
    region               = "ap-southeast-2"
    encrypt              = true
    workspace_key_prefix = "mulla-website"
  }
}
