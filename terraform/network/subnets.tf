resource "aws_subnet" "public-1" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = local.public_1_subnet_cidr
  map_public_ip_on_launch = false
  availability_zone       = "ap-southeast-1a"

  tags = {
    Name = "subnet-public-1"
  }
}

resource "aws_subnet" "public-2" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = local.public_2_subnet_cidr
  map_public_ip_on_launch = false
  availability_zone       = "ap-southeast-1b"

  tags = {
    Name = "subnet-public-2"
  }
}

resource "aws_subnet" "private-1" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = local.private_1_subnet_cidr
  map_public_ip_on_launch = false
  availability_zone       = "ap-southeast-1a"

  tags = {
    Name = "subnet-private-1"
  }
}

resource "aws_subnet" "private-2" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = local.private_2_subnet_cidr
  map_public_ip_on_launch = false
  availability_zone       = "ap-southeast-1b"

  tags = {
    Name = "subnet-private-2"
  }
}

resource "aws_subnet" "datastore-1" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = local.datastore_1_subnet_cidr
  map_public_ip_on_launch = false
  availability_zone       = "ap-southeast-1a"

  tags = {
    Name = "subnet-datastore-1"
  }
}

resource "aws_subnet" "datastore-2" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = local.datastore_2_subnet_cidr
  map_public_ip_on_launch = false
  availability_zone       = "ap-southeast-1b"

  tags = {
    Name = "subnet-datastore-2"
  }
}
