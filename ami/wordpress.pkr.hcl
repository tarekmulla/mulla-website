packer {
  required_plugins {
    amazon = {
      version = ">= 0.0.2"
      source  = "github.com/hashicorp/amazon"
    }
  }
}

locals {
  timestamp = regex_replace(timestamp(), "[- TZ:]", "")
}
variable "ami_prefix" {
  type    = string
  default = "wordpress"
}
variable "app" {
  type        = string
  description = "The application name"
  default     = "mulla-website"
}

source "amazon-ebs" "ubuntu" {
  ami_name = "${var.ami_prefix}-${local.timestamp}"
  tags = {
    OS_Version    = "Ubuntu"
    Release       = "22.04"
    Base_AMI_Name = "${var.ami_prefix}-${local.timestamp}"
  }
  instance_type = "t4g.nano"
  region        = "us-east-1"
  source_ami_filter {
    filters = {
      name                = "*-ami-*-kernel-6.1-arm64"
      root-device-type    = "ebs"
      virtualization-type = "hvm"
      architecture        = "arm64"
    }
    most_recent = true
    owners      = ["amazon"]
  }
  subnet_id = "subnet-0458738b0c1df39b4"

  ssh_username = "ec2-user"
}


build {
  name = "packer-wordpress-ami"
  sources = [
    "source.amazon-ebs.ubuntu"
  ]
  provisioner "file" {
    source      = "./setup.sh"
    destination = "~/setup.sh"
  }
    provisioner "file" {
    source      = "./wordpress.sh"
    destination = "~/wordpress.sh"
  }

  provisioner "shell" {
    inline = [
      "cd ~",

      "sudo chmod +x ./setup.sh",
      "echo Running setup",
      "sudo ./setup.sh",
      "sudo rm ./setup.sh",

      "sudo chmod +x ./wordpress.sh",
      "echo Running wordpress",
      "./wordpress.sh",
      "sudo rm ./wordpress.sh",
    ]
  }
  provisioner "shell" {
    inline = ["echo this provisoner runs at last"]
  }

}
