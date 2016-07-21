'use strict';

/**
* @ngdoc overview
* @name clusterInterfaceApp
* @description
* # clusterInterfaceApp
*
* Main module of the application.
*/
angular
.module('clusterInterfaceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.select'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
    .otherwise({
        redirectTo: '/'
    });
});
