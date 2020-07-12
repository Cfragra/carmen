'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  const accessControlAllowHeaders = ['Location'];

  res.header(
    'Access-Control-Allow-Headers',
    accessControlAllowHeaders.join(',')
  );
  res.header(
    'Access-Control-Expose-Headers',
    accessControlAllowHeaders.join(',')
  );
  next();
});

const {
  accountRouter,
  userRouter,
  homeRouter,
  translatorRouter,
  searchRouter,
} = require('./routes');

app.get('/', (req, res) => res.send('¡Bienvenido a Castiel Traducciones!'));

app.use('/api', accountRouter);
app.use('/api', userRouter);
app.use('/api', homeRouter);
app.use('/api', translatorRouter);
app.use('/api', searchRouter);

let server = null;

async function listen(port) {
  if (server) {
    return server;
  }
  try {
    server = await app.listen(port);
    return server;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

module.exports = { listen };
