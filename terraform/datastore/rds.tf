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

data "aws_ssm_parameter" "db_password" {
  name = "/mss/database/password"
}

resource "aws_security_group" "mms-rds-sg" {
  name        = "mms-security-group-rds"
  description = "Allows application tier to access the RDS instance"
  vpc_id      = var.vpc_id

  ingress {
    description     = "EC2 to RDS"
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [var.application_tier_sg]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "mms-security-group-rds"
  }
}


resource "aws_db_instance" "mms-rds" {
  allocated_storage      = 10
  identifier             = "mms-rds"
  engine                 = "postgres"
  engine_version         = "14.5"
  instance_class         = "db.t3.micro"
  username               = "mms"
  password               = data.aws_ssm_parameter.db_password.value
  skip_final_snapshot    = true
  db_subnet_group_name   = var.db_subnet_group
  vpc_security_group_ids = [aws_security_group.mms-rds-sg.id]
}
