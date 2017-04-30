const request = require('./request');

function fetchData() {
  request().then(() => {});
}

module.exports = fetchData;
