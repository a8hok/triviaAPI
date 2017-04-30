const request = require('./request');
const template = require('../template');

// generate template.
function generateTemplate(data) {
  const html = template.index({
    data: data.results,
  });
  return Promise.resolve(html);
}

function fetchData() {
  return request().then(data =>
    generateTemplate(data));
}

module.exports = fetchData;
