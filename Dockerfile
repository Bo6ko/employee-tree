FROM node:18-alpine
WORKDIR /employee-tree
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
