FROM alpine:3.7

RUN apk update && apk add nodejs

WORKDIR /app

ADD ./index.js .

EXPOSE 80

CMD ["node", "index.js"]