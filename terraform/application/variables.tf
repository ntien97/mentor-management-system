variable "vpc_id" {
  type = string
}

variable "subnet_ids" {
  type = list(string)
}

variable "datastore_address" {
  type = string
}

locals {
  app_port      = 3000
  ecr_repo_name = "mms-app"
}
