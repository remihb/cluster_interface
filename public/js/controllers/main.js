/* jshint
laxcomma:true
, laxbreak:true
, loopfunc: true
, unused : false
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
.controller('MainCtrl', function ($scope, $rootScope, imageservice) {
    $scope.flow = [];
    // $scope.moduleList = _.uniqBy(_.sortBy([
    //     new WordCounter(), new Bla(), new WordCounter(), new Bla(), new Bla(), new Bla(), new WordCounter()
    // ], function(mod){ return mod.getName().toLowerCase();}), function(mod){
    //     return mod.getName();
    // });
    var moduleList = _.uniqBy([
        new WordCounter()
    ], function(mod){
        return mod.getName();
    });
    $scope.moduleList = [];
    _.forEach(moduleList, function(mod){
        imageservice.get(mod.getName().toLowerCase())
        .then(function(result){
            console.log(result.data + " docker image has been successfully built");
            $scope.moduleList.push(mod);
        })
        .catch(function(error){
            console.log(error.data);
        });
    });
    $scope.changePlaceholder = function(){
        $('.ui-select-search').attr('placeholder', 'Filter by name');
    };

    $scope.getModule = function(module){
        $scope.selectedModule = module;
    };

    $scope.removeModule = function(line){
        $scope.flow[line].pop();
        if (_.isEmpty($scope.flow[line])){
            $scope.flow.splice(line,1);
        }
    };
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
