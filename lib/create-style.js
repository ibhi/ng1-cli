const path = require('path');
const fs = require('fs');
const createFile = require('./create-file');

const createStyle = (name, templatePath, destPath, type) => {
  fs.readFile(templatePath, 'utf-8', (err, file) => {
    if(err){
      console.log(chalk.red('Error creating ' + filePath + '/' + fileName));
      process.exit(1);
    }
    createFile(destPath, name + '.' + type + '.css', file);
  });
};

module.exports = createStyle;