(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('Module')
        .component('__camelCaseName__', {
            templateUrl: '__snakeCaseName__.component.html',
            //template: '',
            controller: __capitalizeName__Controller,
            bindings: {
            },
        });

    __capitalizeName__Controller.inject = [];
    function __capitalizeName__Controller() {
        var ctrl = this;
        

        ////////////////

        ctrl.onInit = function() { };
        ctrl.onChanges = function(changesObj) { };
        ctrl.onDestory = function() { };
    }
})();
