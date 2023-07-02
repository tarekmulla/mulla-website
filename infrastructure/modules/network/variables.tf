variable "app" {
  type        = string
  description = "The application name"
}

variable "tags" {
  description = "AWS Tags to add to all resources created (where possible)"
  type        = map(string)
}

variable "vpc_cidr" {
  description = "The CIDR block for the VPC"
  default     = "10.0.0.0/16"
}

variable "private_subnet_cidr" {
  description = "List of CIDR blocks for private subnets"
  default     = ["10.0.100.0/24", "10.0.101.0/24"]
}

variable "public_subnet_cidr" {
  description = "List of CIDR blocks for public subnets"
  default     = ["10.0.0.0/24", "10.0.1.0/24"]
}

variable "availability_zones" {
  description = "List of availablility zones"
  default     = ["us-east-1a", "us-east-1b"]
}
