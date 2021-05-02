FROM node:15-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci

COPY /src /app/src
COPY /migrations /app/migrations

CMD npm start
