FROM node:lts

ENV CI=true
ENV PORT=3000

WORKDIR /code/frontend/
COPY package.json /code/frontend/package.json
COPY package-lock.json /code/frontend/package-lock.json

COPY . /code/frontend/

CMD [ "npm", "start" ]
