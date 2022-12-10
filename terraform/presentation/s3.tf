resource "aws_s3_bucket" "mentor_management_system_web" {
  bucket = "mentor-management-system-web"
}

resource "aws_s3_bucket_acl" "mentor_management_system_web" {
  bucket = aws_s3_bucket.mentor_management_system_web.id
  acl    = "private"
}

resource "aws_s3_bucket_versioning" "mentor_management_system_web" {
  bucket = aws_s3_bucket.mentor_management_system_web.id
  versioning_configuration {
    status = "Disabled"
  }
}

resource "aws_s3_bucket_website_configuration" "mentor_management_system_web" {
  bucket = aws_s3_bucket.mentor_management_system_web.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "mentor_management_system_web" {
  bucket = aws_s3_bucket.mentor_management_system_web.id

  block_public_acls  = true
  ignore_public_acls = true
}

data "aws_iam_policy_document" "s3_bucket_policy" {
  statement {
    sid = "1"

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "arn:aws:s3:::${aws_s3_bucket.mentor_management_system_web.bucket}/*",
    ]

    principals {
      type = "AWS"

      identifiers = [
        aws_cloudfront_origin_access_identity.mss_oai.iam_arn,
      ]
    }
  }
}


resource "aws_s3_bucket_policy" "mentor_management_system_web" {
  bucket = aws_s3_bucket.mentor_management_system_web.id
  policy = data.aws_iam_policy_document.s3_bucket_policy.json
}
