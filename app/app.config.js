'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/list/:year', {
          template: '<f1-list-year></f1-list-year>'
        }).
        otherwise('/list/2021');
    }
  ]);