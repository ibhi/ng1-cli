const expect = require("chai").expect;
const fs = require('fs');
const chalk = require('chalk');
const replace = require('./../lib/replace-name');
const createFile = require('./../lib/create-file');
const {
  CMPJSTMPLPATH,
  CMPHTMLTMPLPATH,
  CMPCSSTMPLPATH
} = require('./../lib/constants/constants');

describe('Create file', () => {
  it('should create a file with provided details', (done) => {
    let testJsConfig = {
          fs,
          chalk,
          replace,
          name: 'hello',
          moduleName: 'app.module',
          templatePath: CMPJSTMPLPATH,
          destPath: '/home/ibhi/nodejs/test',
          type: 'component',
          ext: '.js'
        };
    let testOutput = `(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .app.module('app.module')
        .component('hello', {
            templateUrl: 'hello.component.html',
            //template: '',
            controller: HelloController,
            bindings: {
            },
        });

    HelloController.inject = [];
    function HelloController() {
        var ctrl = this;
        

        ////////////////

        ctrl.onInit = function() { };
        ctrl.onChanges = function(changesObj) { };
        ctrl.onDestory = function() { };
    }
})();`;

    createFile(testJsConfig).then(() => {
      fs.readFile('/home/ibhi/nodejs/test/hello.component.js','utf-8', (err, data) => {
        if(err) done(err);
        expect(data).to.contain(testOutput);
        done();
      });
    });
  });
});
