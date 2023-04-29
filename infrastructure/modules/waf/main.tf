resource "aws_wafv2_web_acl" "web_acl" {
  name        = "${var.app}-acl"
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

  # Inspects IPs that have been identified as bots by Amazon threat intelligence
  rule {
    name     = "${var.app}-rule-ip-reputation"
    priority = 2

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesAmazonIpReputationList"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "${var.app}-rule-ip-reputation-metric"
      sampled_requests_enabled   = true
    }
  }

  # block request patterns associated with exploitation of SQL databases, like SQL injection
  rule {
    name     = "${var.app}-rule-sql-rule-set"
    priority = 4

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesSQLiRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "${var.app}-rule-sql-rule-set-metric"
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
