(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('Module')
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
})();
