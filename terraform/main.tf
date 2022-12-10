terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  backend "s3" {
    bucket = "mentor-management-system-tfstate"
    key    = "mentor-management-system/terraform.tfstate"
    region = "ap-southeast-1"
  }
}

provider "aws" {
  region = "ap-southeast-1"
}

module "presentation" {
  source = "./presentation"
}

module "network" {
  source = "./network"
}

module "application" {
  source            = "./application"
  vpc_id            = module.network.vpc_id
  subnet_ids        = module.network.private_subnets
  datastore_address = module.datastore.mss_rds_address
}

module "datastore" {
  source              = "./datastore"
  db_subnet_group     = module.network.db_subnet_group
  vpc_id              = module.network.vpc_id
  application_tier_sg = module.application.application_tier_sg
}
