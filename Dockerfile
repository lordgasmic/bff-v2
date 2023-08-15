FROM node:16.16.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 8080
ENV NODE_ENV=production
ENTRYPOINT ["node", "bin/www"]