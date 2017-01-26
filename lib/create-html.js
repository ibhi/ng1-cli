const path = require('path');
const fs = require('fs');
const createFile = require('./create-file');

const createHtml = (name, templatePath, destPath, type) => {
  fs.readFile(templatePath, 'utf-8', (err, file) => {
    if (err) process.exit(1);
    file = file.replace(new RegExp(/__name__/, 'gim'), name);
    createFile(destPath, name + '.' + type + '.html', file);
  });
};

module.exports = createHtml;
