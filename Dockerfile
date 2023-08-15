FROM node:16.16.0-alpine as build
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npx tsc

FROM build as publish
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/package.json .
RUN npm ci --omit=dev
COPY --from=build /usr/src/app/dist .
EXPOSE 8080
ENV NODE_ENV=production
ENV PORT=8080
ENTRYPOINT ["node", "bin/www.js"]
