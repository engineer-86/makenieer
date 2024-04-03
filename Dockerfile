# build stage
FROM node:19.5.0-alpine3.17 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# nginx stage
FROM nginx:stable-alpine3.17
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/dist/makenieer-web/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
