const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const Entities = require('html-entities').AllHtmlEntities;
require('handlebars-helpers')();

const entities = new Entities();

handlebars.registerHelper('decodeHtml', text => entities.decode(text));

// Compile tempalate using Handlebars.
const compileTemplate = filename =>
  handlebars
    .compile(fs.readFileSync(path.join(__dirname, filename))
    .toString('utf-8'));

module.exports = {
  index: compileTemplate('index.html'),
};
