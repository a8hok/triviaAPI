// Module dependency.
const dotEnv = require('dotenv');
const path = require('path');

// Environment file inclusion.
const envName = process.env.ENV_NAME || 'development';
dotEnv.config({
  path: path.join(__dirname, `${envName}.env`),
});
const config = {
  // Api URL
  APIURL: process.env.TRIVIA_API_URL,
  // Server configuration details.
  server: {
    port: process.env.TRIVIA_API_PORT,
    host: process.env.TRIVIA_API_HOST,
  },
  wreck: {
    json: 'force',
    timeout: 20 * 1000,
    maxBytes: 1 * 1000 * 1000,  // 1mb
  },
};

module.exports = config;
