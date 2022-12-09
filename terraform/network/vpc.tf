resource "aws_vpc" "vpc" {

  cidr_block = local.vpc_cidr

  tags = {
    Name = "service-vpc"
  }
}
