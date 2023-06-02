FROM node:18.13.0

WORKDIR /usr/src/app

COPY prisma ./prisma
COPY package*.json ./
COPY tsconfig*.json ./
COPY src/. /usr/src/app/src/
COPY .env .env

RUN npm install
RUN npm run build

# Expor a porta
EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV SECRET_KEY=@912213j1mdkmec


CMD ["node", "./dist/main.js"]
