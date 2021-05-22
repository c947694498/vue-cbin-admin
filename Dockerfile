# 使用nginx
FROM nginx
# 复制 dist 目录 到 /usr/share/nginx/html/ 目录下
COPY dist/ /usr/share/nginx/html/
# 复制 nginx/default.conf 到 /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# 暴露在80端口
EXPOSE 80