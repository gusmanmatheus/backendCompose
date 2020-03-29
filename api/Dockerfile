FROM node:latest
ENV NODE_PORT=3000
WORKDIR /home/node/app
COPY ["package.json","package-lock.json","./"]
RUN yarn install
CMD yarn dev
EXPOSE $NODE_PORT