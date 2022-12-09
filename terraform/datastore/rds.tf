#resource "aws_db_instance" "default" {
#  allocated_storage      = 10
#  db_subnet_group_name   = aws_db_subnet_group.default.id
#  engine                 = "mysql"
#  engine_version         = "8.0.20"
#  instance_class         = "db.t2.micro"
#  multi_az               = true
#  name                   = "mydb"
#  username               = "username"
#  password               = "password"
#  skip_final_snapshot    = true
#  vpc_security_group_ids = [aws_security_group.database-sg.id]
#}

resource "aws_db_instance" "mentor-management-system" {
  allocated_storage    = 10
  db_name              = "mentor-management-system"
  engine               = "postgresql"
  engine_version       = "14.5"
  instance_class       = "db.t3.micro"
  # todo: save this somewhere safe
  username             = "foo"
  password             = "foobarbaz"
  skip_final_snapshot  = true

  # todo: put this inside a vpc
}
