'use strcit';

// Module dependency.
const Hapi = require('hapi');

// Internal module dependency.
const config = require('./src/config');
const testBuilder = require('./src/plugins/quizBuilder');

const server = new Hapi.Server();

// Server connection info.
server.connection({
  host: config.server.host,
  port: config.server.port,
});

// Concatenate plugins.
let plugins = [];
plugins = plugins.concat(testBuilder);

// custom plugins
server.register(plugins, (err) => {
  if (err) throw err;
});

// Starting server.
/* eslint-disable no-console*/

server.start((err) => {
  if (err) throw err;
  console.log('server info', `server listing in port: ${config.server.port}`);
});
