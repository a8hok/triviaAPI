const Wreck = require('wreck');
const config = require('../config');
const uri = require('url');

// form URL with default params.
function addApiParams(url) {
  const params = '?amount=10&category=12&difficulty=medium&type=multiple';
  return uri.resolve(url, params);
}

// Fetch test data from Travia API.
function getApiResponse(headers = {}) {
  let url = config.APIURL;
  url = addApiParams(url);
  return new Promise((resolve, reject) => {
    Wreck.get(
      url,
      Object.assign({}, config.wreck, { headers }),
      (err, res, payload) => {
        if (err) return reject(err);
        if (res.statusCode !== 200) {
          return reject('oops! something went wrong while accessing the endpoint');
        }
        return resolve(payload);
      });
  });
}

module.exports = getApiResponse;
