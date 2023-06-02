
FROM node:18.13.0 as builder

WORKDIR /usr/src/app

COPY prisma ./prisma
COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install
RUN npm run build


FROM node:18.13.0

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY prisma ./prisma
COPY package*.json ./
COPY tsconfig*.json ./

EXPOSE 3000

CMD ["node", "dist/main"]
