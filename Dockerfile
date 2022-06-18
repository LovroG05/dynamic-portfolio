# Stage 1
FROM node:latest as build-step

RUN mkdir -p /app

WORKDIR /app

RUN npm i -g @angular/cli

COPY package.json /app

RUN npm install

COPY . /app


RUN ng build

FROM nginx:latest AS release
COPY --from=build-step app/dist/portfolioremake /usr/share/nginx/html/