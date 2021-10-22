'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<f1-list></f1-list>'
        }).
        otherwise('/');
    }
  ]);