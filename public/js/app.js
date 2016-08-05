'use strict';

// Declare app level module which depends on filters, and services

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
	.config(function($routeProvider) {
		$routeProvider.
		when('/', {
				templateUrl: 'partials/main'
				// controller: 'MainCtrl'
			})
			// when('/view1', {
			//   templateUrl: 'partials/partial1',
			//   controller: 'MyCtrl1'
			// }).
			// when('/view2', {
			//   templateUrl: 'partials/partial2',
			//   controller: 'MyCtrl2'
			// }).
			// .
			// otherwise({
			//   redirectTo: 'partials/main'
			// })
		;
	});
