/* jshint
laxcomma:true
, laxbreak:true
, unused : false
, loopfunc: true
*/

'use strict';

/**
* @ngdoc function
* @name clusterInterfaceApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the clusterInterfaceApp
*/
angular.module('clusterInterfaceApp')
.controller('MainCtrl', function ($scope, $rootScope) {
    $scope.moduleList = _.sortBy([
        new Component_type("encoder", "Allow to encode multiple video file format"), new Component_type("encode-parser"), new Component_type("decoder"), new Component_type("Component")
    ], function(mod){ return mod.getName().toLowerCase();});

    $scope.changePlaceholder = function(){
        $('.ui-select-search').attr('placeholder', 'Filter by name');
    };

    $scope.getModule = function(module){
        $scope.selectedModule = module;
    };
    $scope.flow = [];
    $rootScope.$on('dropEvent', function (evt, dragged, dropped) {
        var indexes;
        if (dropped === "newline"){
            $scope.flow.push([dragged.getName()]);
        }
        else if (dropped.indexOf("newcol") >= 0){
            indexes = dropped.split('-');
            $scope.flow[indexes[0]].push(dragged.getName());
        }
        else{
            indexes = dropped.split('-');
            $scope.flow[indexes[0]][indexes[1]] = dragged.getName();
        }
        $scope.$apply();
    });

});
