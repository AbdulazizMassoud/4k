FROM node:16.17.0-alpine AS builder

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/build/ .

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY cert.crt /etc/nginx/sites-available/cert.crt
COPY ssl.key /etc/nginx/sites-available/ssl.key

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]