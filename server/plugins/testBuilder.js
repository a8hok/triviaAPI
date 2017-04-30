const Boom = require('boom');
const memoizee = require('memoizee');
const fecther = require('../data/fetch-from-travia');

// Test builder.
function testBuilder(request, reply) {
  reply(Boom.notImplemented());
}

// Application start here.
function testRoute(server, options, next) {
  server.route({
    method: 'GET',
    path: '/',
    handler: testBuilder,
  });

  next();
}

testRoute.attributes = {
  name: 'test-builder',
  version: '0.1.0',
};

module.exports = testRoute;
