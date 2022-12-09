resource "aws_instance" "mentor-management-system" {
  # https://aws.amazon.com/amazon-linux-ami/
  ami           = "ami-08569b978cc4dfa10"
  instance_type = "t2.micro"
  # todo: add proper ec2 value
#  network_interface {
#    network_interface_id = aws_network_interface.foo.id
#    device_index         = 0
#  }
#
#  credit_specification {
#    cpu_credits = "unlimited"
#  }
}
