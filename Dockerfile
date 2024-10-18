from node:lts-alpine

COPY . /app
workdir /app

run npm install


run npm run build
expose 8080
cmd ["npm", "run", "start"]