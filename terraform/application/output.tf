output "application_tier_sg" {
  value = aws_security_group.mms_app.id
}

output "application_lb_domain_name" {
  value = aws_lb.mss_app.dns_name
}
