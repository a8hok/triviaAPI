// Module dependency.
const dotEnv = require('dotenv');
const path = require('path');

// Environment file inclusion.
const envName = process.env.ENV_NAME || 'development';
dotEnv.config({
  path: path.join(__dirname, `${envName}.env`),
});
const config = {
  // Server configuration details.
  server: {
    port: process.env.TRIVIA_API_PORT,
    host: process.env.TRIVIA_API_HOST,
  },
};

module.exports = config;
