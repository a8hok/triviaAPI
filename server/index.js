'use strcit';

// Module dependency.
const Hapi = require('hapi');

// Internal module dependency.
const config = require('./config');
const testBuilder = require('./plugins/testBuilder');

const server = new Hapi.Server();

// Server connection info.
server.connection({
  host: config.server.host,
  port: config.server.port,
});

// Concatenate all plugins.
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
