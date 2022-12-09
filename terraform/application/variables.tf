variable "vpc_id" {
  type = string
}

variable "subnet_ids" {
  type = list(string)
}

locals {
  app_port = 3000
}
