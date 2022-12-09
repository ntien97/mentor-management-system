resource "aws_iam_role" "mms_app" {
  name               = "mms-role-app"
  assume_role_policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Action" : "sts:AssumeRole",
        "Principal" : {
          "Service" : "ec2.amazonaws.com"
        },
        "Effect" : "Allow",
        "Sid" : ""
      }
    ]
  })
}

resource "aws_iam_role_policy" "mms_app" {
  role = aws_iam_role.mms_app.id

  # todo: consider minimum access
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Action" : [
          "ecr:*"
        ],
        "Effect" : "Allow",
        "Resource" : "*"
      }
    ]
  })
}


