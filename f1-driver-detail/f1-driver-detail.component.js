"use strict";

angular.
    module("f1DriverDetail").
    component("f1DriverDetail", {
        bindings: {
            data: "<"
        },
        templateUrl: "f1-driver-detail/f1-driver-detail.template.html",
        controller: [ "$routeParams", function F1DriverDetailController($routeParams) {
            console.log("F1 driver detail")

            this.year = $routeParams.year;

        }]
    });