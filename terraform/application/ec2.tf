# Retrieve the newest linux 2 HVM AMI
data "aws_ami" "amazon_linux_2" {
  most_recent = true
  owners = ["amazon"]
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

  instance_type = "t2.nano"
  image_id      = data.aws_ami.amazon_linux_2.id

  network_interfaces {
    associate_public_ip_address = false
    security_groups             = [aws_security_group.mms_app.id]
  }

  # todo: add user data to pull ecr, run task
  user_data = base64encode(templatefile("${path.module}/user-data/mss_app.sh", {}))
}
