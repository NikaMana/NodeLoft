require('dotenv').config();

const simpleServer = require('./http-server');

const {
  SERVER_INTERVAL,
  SERVER_TIMEOUT
} = process.env;

simpleServer.start(SERVER_INTERVAL, SERVER_TIMEOUT)