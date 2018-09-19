FROM node:8.11.4

RUN mkdir -p /home/www/dnodeclient
WORKDIR /home/www/dnodeclient

COPY . /home/www/dnodeclient

RUN npm install

EXPOSE 3006

CMD node clientjs