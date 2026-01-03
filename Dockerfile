FROM node:18

WORKDIR /app

# نسخ package.json أولًا لتثبيت dependencies
COPY package*.json ./

RUN npm install

# نسخ باقي الملفات
COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
