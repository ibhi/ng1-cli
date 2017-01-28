const program = require('commander');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const createFile = require('./lib/create-file');
const replace = require('./lib/replace-name');
// const createJs = require('./lib/create-js');
// const createHtml = require('./lib/create-html');
// const createStyle = require('./lib/create-style');
const chalk = require('chalk');

program
  .option('-m, --module <name>', 'Module name of the angular app')
  .option('-f, --folder', 'Create a new folder');

program.action(() => {
  let name;
  if(program.args) {
    name = program.args[0];
  } else {
    console.log('Providee a valid name for the component');
    process.exit(1);
  }
  if(name) {
    if(program.folder) {
      mkdirp(name, (err, folderPath) => {
        if(err) process.exit(1);
        if(!folderPath) {
          console.log(chalk.red('Folder with the same name already exists'));
          process.exit(1);
        }
        createFile(name, './templates/component/component.js', folderPath, 'component', '.js');
        createFile(name, './templates/component/component.html', folderPath, 'component', '.html');
        createFile(name, './templates/component/component.css', folderPath, 'component', '.css');
      })
    } else {
      createFile(name, './templates/component/component.js', path.resolve(process.cwd()), 'component', '.js');
      createFile(name, './templates/component/component.html', path.resolve(process.cwd()), 'component', '.html');
      createFile(name, './templates/component/component.css', path.resolve(process.cwd()), 'component', '.css');
    }
  }
});

program.parse(process.argv);
