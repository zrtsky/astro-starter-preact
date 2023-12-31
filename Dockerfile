FROM node:lts-alpine AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Need to set these in the docker-compose.yml file or in the docker run command
# ENV HOST=0.0.0.0
# ENV PORT=...
# EXPOSE ...

CMD node ./dist/server/entry.mjs
