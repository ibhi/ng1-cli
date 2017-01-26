const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const program = require('commander');
const replace = require('./replace-name');

const createFile = (name, templatePath, destPath, type, ext) => {
  fs.readFile(templatePath, 'utf-8', (err, file) => {
    if (err) {
      console.log(chalk.red('Error creating ' + filePath + '/' + fileName));
      process.exit(1);
    }
    // For js
    if (ext === '.js') {
      file = replace.withCamelCase('__camelCaseName__', name, file);
      file = replace.withKebabCase('__snakeCaseName__', name, file);
      file = replace.withCapitalize('__capitalizeName__', name, file);
      // Module name
      if (program.module) {
        file = file.replace(/Module/gim, program.module);
      }
    }
    writeFile(destPath, name + '.' + type + ext, file);
  });
};

const writeFile = (filePath, fileName, content) => {
  fs.writeFile(filePath + '/' + fileName, content, (err) => {
    if (err) {
      console.log(chalk.red('Error creating ' + filePath + '/' + fileName));
      process.exit(1);
    }
    console.log(chalk.green.bold.underline('Created ' + fileName));
  });
}

module.exports = createFile;
