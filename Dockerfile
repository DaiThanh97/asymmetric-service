# STAGE 1
FROM node:14-alpine AS build

ARG CI_JOB_TOKEN
ENV CI_JOB_TOKEN=$CI_JOB_TOKEN
ARG COMMON_PROJECT_ID
ENV COMMON_PROJECT_ID=$COMMON_PROJECT_ID

RUN mkdir /gameservice
WORKDIR /gameservice

COPY package.json .

RUN npm config set @galaxy-fortune:registry https://gitlab.com/api/v4/projects/${COMMON_PROJECT_ID}/packages/npm/ && \
  npm config set -- '//gitlab.com/api/v4/projects/${COMMON_PROJECT_ID}/packages/npm/:_authToken' "${CI_JOB_TOKEN}" && \
  npm install

COPY . .
RUN npm run build
RUN npm prune --production

# STAGE 2
FROM node:14-alpine

RUN mkdir /gameservice
WORKDIR /gameservice

COPY --from=build /gameservice/dist ./dist
COPY --from=build /gameservice/node_modules ./node_modules

ENV NODE_ENV=production

CMD [ "node", "./dist/index.js" ]