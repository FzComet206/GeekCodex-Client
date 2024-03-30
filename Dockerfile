# Build
FROM node

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

WORKDIR /app
COPY /node_modules ./node_modules
COPY . .

RUN npm run build

WORKDIR /app
COPY /public ./public

EXPOSE 3000
CMD ["npm", "start"]