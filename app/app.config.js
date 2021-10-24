'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/list/:year', {
          template: '<f1-list-year></f1-list-year>'
        }).
        when('/results/:year/:driverId', {
          template: '<f1-single-driver-results></f1-single-driver-results>'
        }).
        otherwise('/list/2021');
    }
  ]);