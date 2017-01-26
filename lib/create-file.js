const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const createFile = (filePath, fileName, content) => {
    fs.writeFile(filePath + '/' + fileName, content, (err) => {
      if(err){
        console.log(chalk.red('Error creating ' + filePath + '/' + fileName));
        process.exit(1);
      }
      console.log(chalk.green.bold.underline('Created ' + fileName));
    });
}

// createFile(path.resolve(process.cwd()), 'test.txt', 'Hello');

module.exports = createFile;
