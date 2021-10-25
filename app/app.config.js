'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/list/driver-standings/:year', {
          template: '<f1-list-year></f1-list-year>'
        }).
        when('/list/results/:year/:driverId', {
          template: '<f1-single-driver-results></f1-single-driver-results>'
        }).
        otherwise('/list/driver-standings/' + new Date().getFullYear() );
    }
  ]);