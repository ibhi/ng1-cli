const program = require('commander');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const createFile = require('./lib/create-file');
const replace = require('./lib/replace-name');
const createJs = require('./lib/create-js');
const createHtml = require('./lib/create-html');
const createStyle = require('./lib/create-style');

program
  .option('-m, --module <name>', 'Module name of the angular app')
  .option('-f, --folder <name>', 'Create a new folder');

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
      mkdirp(program.folder, (err, folderPath) => {
        if(err) process.exit(1);
        createJs(name, './templates/component/component.js', folderPath, 'component');
        createHtml(name, './templates/component/component.html', folderPath, 'component');
        createStyle(name, './templates/component/component.css', folderPath, 'component');
      })
    } else {
      createJs(name, './templates/component/component.js', path.resolve(process.cwd()), 'component');
      createHtml(name, './templates/component/component.html', path.resolve(process.cwd()), 'component');
      createStyle(name, './templates/component/component.css', path.resolve(process.cwd()), 'component');
    }
  }
});

program.parse(process.argv);

const replaceName = (find, replace, content) => content.replace(new RegExp(find, 'gi'), replace);
