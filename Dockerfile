FROM node:18.17.0-alpine
WORKDIR /var/www/ReactJest/app
RUN npm install -g npm@latest && npm install -g vite@latest