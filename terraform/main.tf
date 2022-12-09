terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
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
  source = "./application"
}

module "datastore" {
  source = "./datastore"
}
