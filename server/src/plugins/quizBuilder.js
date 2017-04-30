const memoizee = require('memoizee');
const fecther = require('../data/fetch-from-travia');

// Test builder.
function testBuilder(request, reply) {
  const cachedFn = memoizee(fecther);
  cachedFn().then(html =>
     reply(html).header('content-type', 'text/html; charset=utf-8'),
  )
  .catch((err) => {
    const errorMessage = err && err.message;

    reply(`${errorMessage}\n`)
      .header('content-type', 'text/plain; charset=utf-8')
      .code(500);
  });
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
