resource "aws_subnet" "private-1" {
  vpc_id     = aws_vpc.vpc.id
  cidr_block = local.private_subnet_cidr

  tags = {
    Name = "subnet-private-1"
  }
}
