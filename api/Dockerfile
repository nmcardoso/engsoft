FROM node:14

COPY bashrc /root/.bashrc

WORKDIR /src

COPY package.json ./
RUN npm install
RUN sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
RUN apt-get update
RUN apt-get -y install postgresql-client-11

COPY . .
CMD ["npm", "run", "production"]