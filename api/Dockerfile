FROM node:14

COPY bashrc /root/.bashrc

WORKDIR /src

COPY package.json ./
RUN npm install

COPY . .
CMD ["npm", "production"]