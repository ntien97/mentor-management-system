resource "aws_lb" "mss_app" {
  name               = "mss-lb-app"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.mms_app_alb.id]
  subnets            = var.subnet_ids

  enable_deletion_protection = false
}

resource "aws_lb_listener" "mss_app" {
  load_balancer_arn = aws_lb.mss_app.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.app.arn
  }
}

resource "aws_lb_target_group" "app" {
  name     = "mms-lb-target-group-app"
  port     = local.app_port
  protocol = "HTTP"
  vpc_id   = var.vpc_id
}
