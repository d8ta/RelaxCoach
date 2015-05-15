'use strict';

/**
 * @ngdoc function
 * @name relaxCoachApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the relaxCoachApp
 */
angular.module('relaxCoachApp')

  .controller('MainCtrl', function ($scope, DataSvc, $timeout, $log) {

	  $scope.value = 0;

    $scope.onTimeout = function(){
        $scope.value ++;
        if ($scope.value < 100) {
        	$timeout($scope.onTimeout,100);
        }
        else {
			$scope.pulse1 = DataSvc.pulse1;
        }


    }
    $scope.onTimeout();

    $scope.GoTo = function(view){
      $location.path(view);
    };


    $scope.options = {
        width: 250,
        height: 250,
        fgColor: "red",
        skin: "tron",
        thickness: .3,
        displayPrevious: true,
        readOnly: true,
        displayInput: false,
    };



  });
