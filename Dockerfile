FROM node:14

WORKDIR /app

COPY prisma ./prisma
COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

CMD ["node", "dist/main"]
