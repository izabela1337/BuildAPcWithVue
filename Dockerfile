# build an production image
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

# deploy an image to nginx
FROM nginx:stable-alpine AS production-server
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "deamon off"]



