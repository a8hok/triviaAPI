'use strcit';

// Module dependency.
const Hapi = require('hapi');

// Internal module dependency.
const config = require('./config');

const server = new Hapi.Server();

// Server connection info.
server.connection({
  host: config.server.host,
  port: config.server.port,
});

/* eslint-disable no-console*/
// Starting server
server.start((err) => {
  if (err) throw err;
  console.log('server info', `server listing in port: ${config.server.port}`);
});
