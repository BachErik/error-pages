# Dockerfile
FROM nginx:alpine
COPY ./error-pages/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
