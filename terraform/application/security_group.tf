resource "aws_security_group" "mms_app" {
  name        = "mms-security-group-app"
  description = "Allow HTTP"
  vpc_id      = var.vpc_id

  # todo: consider HTTPs if have ACM
  # todo: consider the port to serve the backend app
  ingress {
    description     = "HTTP from public subnet"
    from_port       = local.app_port
    to_port         = local.app_port
    protocol        = "tcp"
    security_groups = [aws_security_group.mms_app_alb.id]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "mms-security-group-app"
  }
}

resource "aws_security_group" "mms_app_alb" {
  name        = "mms-security-group-app-alb"
  description = "Allow HTTP"
  vpc_id      = var.vpc_id

  # todo: who can access alb

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "mms-security-group-app-alb"
  }
}
