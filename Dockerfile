# develop stage
#FROM node:14-alpine as develop-stage
#WORKDIR /app
#COPY package*.json ./
#RUN npm install -g @quasar/cli
#COPY . .

# build stage
FROM develop-stage as build-stage
RUN npm
RUN quasar build

FROM nginx:stable-alpine

LABEL maintainer="hvicencio@m-risk.com"

COPY config/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/spa/ .

EXPOSE 8080
