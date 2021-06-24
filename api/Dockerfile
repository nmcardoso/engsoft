FROM node:14

COPY bashrc /root/.bashrc

WORKDIR /src

COPY package.json ./
RUN npm install
RUN apt-get update && apt-get install -y postgresql-client

COPY . .
CMD ["npm", "run", "production"]