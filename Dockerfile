FROM node:14-alpine
WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install --force

VOLUME ["/app/dist"]

CMD ["sh", "-c", "npm run build && cp -r build/* /app/dist/"]