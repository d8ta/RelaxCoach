'use strict';

/**
 * @ngdoc function
 * @name relaxCoachApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the relaxCoachApp
 */
angular.module('relaxCoachApp')

  .controller('MainCtrl', function ($scope, $timeout, $location, DataSvc) {

	  $scope.value = 0;
    $scope.pulse1 = DataSvc.pulse1;
    $scope.pulse2 = DataSvc.pulse2;

    $scope.config = {
      tappeable: true
    };

    $scope.onTimeout = function(){
        $scope.value ++;
        if ($scope.value < 100) {
        	$timeout($scope.onTimeout, 100);
          $scope.config.tappeable = false;
        }
        else { // Measurement finished
          $scope.config.tappeable = true;
        }
    };

    if($location.path().indexOf('measurement') >= 0){
      $scope.onTimeout();
      console.log('INNNNNN');
    }


    $scope.GoTo = function(view){
      if(config.tappeable)
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
