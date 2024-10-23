FROM node:18-alpine3.18 AS builder

WORKDIR /app

COPY package.json /app

COPY . /app

RUN npm install