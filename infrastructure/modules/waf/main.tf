resource "aws_wafv2_web_acl" "web_acl" {
  name        = "${var.app}-${terraform.workspace}-acl"
  description = "AWS Managed Rules for WAF"
  scope       = var.cloudfront == true ? "CLOUDFRONT" : "REGIONAL"

  default_action {
    allow {}
  }

  # General rules, including those listed in OWASP, CVE, etc.
  rule {
    name     = "${var.app}-rule-common"
    priority = 1

    override_action {
      count {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "${var.app}-rule-common-metric"
      sampled_requests_enabled   = true
    }
  }

  tags     = var.tags
  tags_all = var.tags

  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "${var.app}-web-acl"
    sampled_requests_enabled   = true
  }
}
