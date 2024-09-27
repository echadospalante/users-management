FROM node:20.9.0-alpine AS builder

WORKDIR /app

RUN npm install -g typescript

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN tsc

FROM node:20.9.0-alpine

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app
COPY --from=builder /app/package-lock.json /app
COPY --from=builder /app/.env /app
COPY --from=builder /app/src/app/config/prisma/schema.prisma /app/dist/app/config/prisma/schema.prisma
COPY --from=builder /app/src/app/config/prisma/migrations /app/dist/app/config/prisma/migrations

EXPOSE 3010

WORKDIR /app

RUN npm install --omit=dev
# RUN apk update && apk add tree
# RUN tree /app

# CMD ["node", "dist/main.js"]
# CMD ["sh", "-c", "npx prisma migrate deploy --schema='/app/dist/app/config/prisma/schema.prisma' && node dist/main.js"]
CMD ["sh", "-c", "npx prisma generate --schema='/app/dist/app/config/prisma/schema.prisma' && npx prisma migrate deploy --schema='/app/dist/app/config/prisma/schema.prisma' && node dist/main.js"]
