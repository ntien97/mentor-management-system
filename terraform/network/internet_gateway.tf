# I'm using Internet Gateway because it's free
resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.vpc.id
}
