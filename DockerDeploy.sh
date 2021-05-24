#!/bin/bash
IMAGE_NAME="vue-cbin-admin"
CONTAINER_NAME="vue-cbin-admin"
CONTAINER_ID=""
npm install --registry=http://registry.npm.taobao.org
npm run build
# 打包镜像
docker image build ./ -t $IMAGE_NAME:latest
# 检查是否存在旧容器
docker container inspect $CONTAINER_NAME
if [ $? = "0" ]; then
	# 删除旧容器
	docker container rm -f $CONTAINER_NAME
fi
# 运行容器
docker run -p 8845:80 -d --name $CONTAINER_NAME $IMAGE_NAME:latest