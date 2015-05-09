'use strict';

/**
 * @ngdoc function
 * @name relaxCoachApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the relaxCoachApp
 */
angular.module('relaxCoachApp')
  .controller('MainCtrl', function ($scope) {

	$scope.images = [

		{url: '/images/AppleWatch.png'},
	];

	$scope.pulse1 = 333;
  });
