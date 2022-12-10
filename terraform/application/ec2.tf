# Retrieve current identity
data "aws_caller_identity" "current" {}
data "aws_region" "current" {}
data "aws_ssm_parameter" "db_password" {
  name = "/mss/database/password"
}
data "aws_ssm_parameter" "jwt_secret" {
  name = "/mss/jwt/secret"
}

# Retrieve the newest linux 2 HVM AMI
data "aws_ami" "amazon_linux_2" {
  most_recent = true
  owners      = ["amazon"]
  filter {
    name   = "owner-alias"
    values = ["amazon"]
  }
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm*"]
  }
}

resource "aws_iam_instance_profile" "mms_app" {
  name = "mms-app-instance-profile"
  role = aws_iam_role.mms_app.name
}

resource "aws_launch_template" "mms_app" {
  name = "mss-launch-template-app"

  block_device_mappings {
    device_name = "/dev/xvda"

    ebs {
      volume_size = 8
    }
  }

  iam_instance_profile {
    arn = aws_iam_instance_profile.mms_app.arn
  }

  instance_type = "t2.micro"
  image_id      = data.aws_ami.amazon_linux_2.id

  key_name = "tien"

  network_interfaces {
    associate_public_ip_address = true
    security_groups             = [aws_security_group.mms_app.id]
  }

  user_data = base64encode(templatefile("${path.module}/user-data/mss_app.sh", {
    ecr_url           = "${data.aws_caller_identity.current.account_id}.dkr.ecr.${data.aws_region.current.name}.amazonaws.com"
    ecr_repo_name     = local.ecr_repo_name
    postgres_host     = var.datastore_address
    postgres_port     = 5432
    postgres_username = "mms"
    postgres_password = data.aws_ssm_parameter.db_password.value
    jwt_expires_in    = "1h"
    jwt_secret        = data.aws_ssm_parameter.jwt_secret.value
  }))
}
