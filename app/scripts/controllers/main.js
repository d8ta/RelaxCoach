'use strict';

/**
 * @ngdoc function
 * @name relaxCoachApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the relaxCoachApp
 */
angular.module('relaxCoachApp')
  .controller('MainCtrl', function ($scope, $location, DataSvc) {

    $scope.pulse1 = DataSvc.pulse1;


    $scope.GoTo = function(view){
      $location.path(view);
    };


  });
