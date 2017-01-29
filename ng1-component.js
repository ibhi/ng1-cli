// import { CMPJSTMPLPATH, CMPHTMLTMPLPATH, CMPCSSTMPLPATH } from './lib/constants/constants';

const program = require('commander');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const createFile = require('./lib/create-file');
const replace = require('./lib/replace-name');
const {
  CMPJSTMPLPATH,
  CMPHTMLTMPLPATH,
  CMPCSSTMPLPATH
} = require('./lib/constants/constants');

program
  .option('-m, --module <name>', 'Module name of the angular app')
  .option('-f, --folder', 'Create a new folder');

program.action(() => {
  let name;
  if(program.args) {
    name = program.args[0];
    console.log('Component +++++++++++++++++++++++')
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
        let jsConfig = {
          fs,
          chalk,
          replace,
          name,
          moduleName: program.module,
          templatePath: CMPJSTMPLPATH,
          destPath: folderPath,
          type: 'component',
          ext: '.js'
        },
        htmlConfig = {
          fs,
          chalk,
          replace,
          name,
          moduleName: program.module,
          templatePath: CMPHTMLTMPLPATH,
          destPath: folderPath,
          type: 'component',
          ext: '.html'
        },
        cssConfig = {
          fs,
          chalk,
          replace,
          name,
          moduleName: program.module,
          templatePath: CMPCSSTMPLPATH,
          destPath: folderPath,
          type: 'component',
          ext: '.css'
        };

        createFile(jsConfig);
        createFile(htmlConfig);
        createFile(cssConfig);
      })
    } else {
      console.log('Name +++++++++++++++', name );
        let jsConfig = {
            fs,
            chalk,
            replace,
            name,
            moduleName: program.module,
            templatePath: CMPJSTMPLPATH,
            destPath: path.resolve(process.cwd()),
            type: 'component',
            ext: '.js'
          },
          htmlConfig = {
            fs,
            chalk,
            replace,
            name,
            moduleName: program.module,
            templatePath: CMPHTMLTMPLPATH,
            destPath: path.resolve(process.cwd()),
            type: 'component',
            ext: '.html'
          },
          cssConfig = {
            fs,
            chalk,
            replace,
            name,
            moduleName: program.module,
            templatePath: CMPCSSTMPLPATH,
            destPath: path.resolve(process.cwd()),
            type: 'component',
            ext: '.css'
          };
        createFile(jsConfig);
        createFile(htmlConfig);
        createFile(cssConfig);
    }
  }
});

program.parse(process.argv);
