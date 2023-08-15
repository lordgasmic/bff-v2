FROM node:16.16.0-alpine as base

FROM base as build
WORKDIR /usr/src/app
copy . .
RUN npm ci --production
RUN npm run build

FROM base as publish
COPY --from=build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
WORKDIR /usr/src/app
EXPOSE 80
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]