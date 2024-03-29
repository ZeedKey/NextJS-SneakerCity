FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn
EXPOSE 3000 3000

CMD ["yarn", "dev"]