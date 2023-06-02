FROM node:18.13.0

WORKDIR /usr/src/app

COPY prisma ./prisma
COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]
