# create a list of tag to be added to all resources (identify resources related to this question)
locals {
  tags = merge({
    Name        = "${var.app}-${terraform.workspace}"
    Application = var.app
    Repository  = "https://github.com/tarekmulla/mulla-website"
    Environment = terraform.workspace
    Type        = "Personal"
    Created_By  = "Terraform"
    Description = "Portflio to show achievments and personal details"

  }, var.tags)
}
