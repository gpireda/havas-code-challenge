FROM node:14.7.0-alpine3.10

WORKDIR /app

COPY . .

RUN npm install && npm rebuild node-sass

CMD ["npm", "start"]
