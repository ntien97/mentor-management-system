output "vpc_id" {
  value = aws_vpc.vpc.id
}

output "private_subnets" {
  // todo: change back to private
  value = [aws_subnet.public-1.id, aws_subnet.public-2.id]
}

output "db_subnet_group" {
  value = aws_db_subnet_group.datastore.id
}
