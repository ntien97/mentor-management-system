resource "aws_route_table" "vpc_to_internet" {
  vpc_id = aws_vpc.vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }

  tags = {
    Name = "Route to internet"
  }
}

resource "aws_route_table_association" "rt1" {
  subnet_id = aws_subnet.public-1.id
  route_table_id = aws_route_table.vpc_to_internet.id
}

resource "aws_route_table_association" "rt2" {
  subnet_id = aws_subnet.public-2.id
  route_table_id =  aws_route_table.vpc_to_internet.id
}
