'use strict';

/**
 * @ngdoc service
 * @name clusterInterfaceApp.imagesService
 * @description
 * # imagesService
 * Factory in the clusterInterfaceApp.
 */

angular.module('clusterInterfaceApp')
	.factory('imageservice', function($http) {
		return {
			get: function(name) {
				return $http.get('/createimages', {
					params: {
						image: name
					}
				});
			}
		};
	});
