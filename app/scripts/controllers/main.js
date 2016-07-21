'use strict';

/**
* @ngdoc function
* @name clusterInterfaceApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the clusterInterfaceApp
*/
angular.module('clusterInterfaceApp')
.controller('MainCtrl', function ($scope) {
    $scope.moduleList = [{name:'salut'}, {name:'bla'}];
    $scope.module = {};

    $scope.changePlaceholder = function(){
        $('.ui-select-search').attr('placeholder', 'Filter by name');
    };
});
