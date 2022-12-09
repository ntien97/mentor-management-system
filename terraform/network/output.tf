output "vpc_id" {
  value = aws_vpc.vpc.id
}

output "private_subnets" {
  value = [aws_subnet.private-1.id, aws_subnet.private-2.id]
}
