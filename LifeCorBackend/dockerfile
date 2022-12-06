FROM node:16

ENV PORT=4000

EXPOSE 4000

WORKDIR /app

COPY [ "package.json", "yarn.lock" ] .

RUN yarn

COPY . .

USER node

CMD ["yarn", "build"]