const path = require('path');
const fs = require('fs');
const replace = require('./replace-name');
const program = require('commander');
const createFile = require('./create-file');

const createJs = (name, templatePath, destPath, type) => {
  fs.readFile(templatePath, 'utf-8', (err, file) => {
    if (err) process.exit(1);
    let newFile = replace.withCamelCase('__camelCaseName__', name, file);
    newFile = replace.withKebabCase('__snakeCaseName__', name, newFile);
    newFile = replace.withCapitalize('__capitalizeName__', name, newFile);
    // Module name
    if (program.module) {
      newFile = newFile.replace(/Module/gim, program.module);
    }
    console.log(newFile);
    createFile(destPath, name + '.' + type + '.js', newFile);
  });
};

module.exports = createJs;
