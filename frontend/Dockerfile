FROM node:lts

ENV CI=true
ENV PORT=3000

WORKDIR /code/frontend/
COPY package.json /code/frontend/package.json
COPY package-lock.json /code/frontend/package-lock.json

RUN npm install

COPY . /code/frontend/

CMD ["npm", "run", "build"]
CMD ["npm", "run", "serve"]
