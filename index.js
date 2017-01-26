#!/usr/bin/env node

var program = require('commander');
var pkg = require('./package.json');

program
    .version(pkg.version)
    .command('component <name>', 'Adds a new component with provided name').alias('c')
    .parse(process.argv);
