FROM node:22-alpine AS builder

WORKDIR /app

RUN npm install -g typescript

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN tsc

FROM node:22-alpine

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app
COPY --from=builder /app/package-lock.json /app
COPY --from=builder /app/.env /app

EXPOSE 3010

WORKDIR /app

RUN npm install --omit=dev

CMD ["node", "dist/main.js"]
