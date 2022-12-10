resource "aws_ecr_repository" "mms_app" {
  name = local.ecr_repo_name
}
