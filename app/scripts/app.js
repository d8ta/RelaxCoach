'use strict';

/**
 * @ngdoc overview
 * @name relaxCoachApp
 * @description
 * # relaxCoachApp
 *
 * Main module of the application.
 */
angular
  .module('relaxCoachApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.html',
        controller: 'MainCtrl'
      })
      .when('/instructions', {
        templateUrl: 'views/instructions.html',
        controller: 'MainCtrl'
      })
      .when('/measurement', {
        templateUrl: 'views/measurement.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
