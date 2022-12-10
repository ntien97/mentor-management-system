IMAGE_ADDRESS=399290176366.dkr.ecr.ap-southeast-1.amazonaws.com/mms-app

# Login to ECR
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 399290176366.dkr.ecr.ap-southeast-1.amazonaws.com

# Build the deps image
docker pull $IMAGE_ADDRESS:deps || true
docker build \
    --target deps \
    --cache-from $IMAGE_ADDRESS:deps \
    -t $IMAGE_ADDRESS:deps \
    -f Dockerfile \
    "."

# Build the builder image
docker pull $IMAGE_ADDRESS:builder || true
docker build \
    --target builder \
    --cache-from $IMAGE_ADDRESS:deps \
    --cache-from $IMAGE_ADDRESS:builder \
    -t $IMAGE_ADDRESS:builder \
    -f Dockerfile \
    "."

# Build the runner image
docker pull $IMAGE_ADDRESS:runner || true
docker build \
    --target runner \
    --cache-from $IMAGE_ADDRESS:deps \
    --cache-from $IMAGE_ADDRESS:builder \
    --cache-from $IMAGE_ADDRESS:runner \
    -t $IMAGE_ADDRESS:runner \
    -t $IMAGE_ADDRESS:latest \
    -f Dockerfile \
    "."

docker push $IMAGE_ADDRESS:latest
docker push $IMAGE_ADDRESS:deps
docker push $IMAGE_ADDRESS:builder
docker push $IMAGE_ADDRESS:runner
