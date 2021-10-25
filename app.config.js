'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/list/driver-standings/', {
          redirectTo:'/list/driver-standings/' + new Date().getFullYear()
        }).
        when('/list/driver-standings/:year', {
          template: '<f1-list-year></f1-list-year>'
        }).
        when('/list/results/driver/:year/:driverId', {
          template: '<f1-single-driver-results></f1-single-driver-results>'
        }).
        when('/list/results/race/:year/:round', {
          template: '<f1-single-race-results></f1-single-race-results>'
        }).
        when('/list/schedule/', {
          redirectTo:'/list/schedule/' + new Date().getFullYear()
        }).
        when('/list/schedule/:year/', {
          template: '<f1-race-schedule></f1-race-schedule>'
        }).
        otherwise('/list/driver-standings/' + new Date().getFullYear() );
    }
  ]);