const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

// Compile tempalate using Handlebars.
const compileTemplate = filename =>
  handlebars
    .compile(fs.readFileSync(path.join(__dirname, filename))
    .toString('utf-8'));

module.exports = {
  index: compileTemplate('index.html'),
};
