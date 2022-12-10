resource "aws_autoscaling_group" "app" {
  name                      = "mms-auto-scaling-group-app"
  max_size                  = 4
  min_size                  = 1
  health_check_grace_period = 300
  health_check_type         = "EC2"
  desired_capacity          = 1
  vpc_zone_identifier       = var.subnet_ids

  launch_template {
    id      = aws_launch_template.mms_app.id
    version = aws_launch_template.mms_app.latest_version
  }

  lifecycle {
    ignore_changes = [load_balancers, target_group_arns]
  }

  tag {
    key                 = "Name"
    value               = "mms-auto-scaling-group-app"
    propagate_at_launch = true
  }

  instance_refresh {
    strategy = "Rolling"
    preferences {
      min_healthy_percentage = 50
    }
  }
}

resource "aws_autoscaling_attachment" "app" {
  autoscaling_group_name = aws_autoscaling_group.app.id
  lb_target_group_arn    = aws_lb_target_group.app.arn
}
