#!/bin/bash
#sudo yum update -y
#sudo yum install docker -y
#sudo service docker start
#sudo systemctl enable docker
#sudo usermod -a -G docker ec2-user
#sudo aws ecr get-login-password --region ap-southeast-1 | sudo docker login --username AWS --password-stdin "${ecr_url}"
#sudo docker run -p 3000:3000 \
#  --restart always \
#  -e POSTGRES_HOST="${postgres_host}" \
#  -e POSTGRES_PORT="${postgres_port}" \
#  -e POSTGRES_USERNAME="${postgres_username}" \
#  -e POSTGRES_PASSWORD="${postgres_password}" \
#  -e JWT_EXPIRES_IN="${jwt_expires_in}" \
#  -e JWT_SECRET="${jwt_secret}" \
#  -d "${ecr_url}/${ecr_repo_name}:latest"
