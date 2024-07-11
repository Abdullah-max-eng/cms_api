FROM node:22-alpine3.19



WORKDIR /app



COPY package.json  .
RUN npm install



COPY .  /app/ 
RUN npm run build





CMD ["node", "dist/src/main.js"]