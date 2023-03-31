variable "app" {
  type        = string
  description = "The application name"
}

variable "tags" {
  description = "AWS Tags to add to all resources created (where possible)"
  type        = map(string)
}

variable "domain" {
  type        = string
  description = "The website domain"
}

variable "acm_certificate_arn" {
  type        = string
  description = "The ARN for the domain certificate in ACM"
}

variable "waf_arn" {
  type        = string
  description = "The ARN for the WAF"
}
