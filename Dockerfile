FROM node:16.16.0-alpine
WORKDIR /app
COPY . .
RUN npm ci --omit=dev
EXPOSE 80
ENV NODE_ENV=production
CMD ["node", "bin/www"]