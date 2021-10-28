"use strict";

angular.
    module("f1List").
    component("f1List", {
        templateUrl: "f1-list/f1-list.template.html",
        controller: function F1ListController($location) {

            this.yearProp = new Date().getFullYear();

            this.onChange = function () {
                if($location.path().includes("schedule")) {
                    $location.path('/list/schedule/' + this.yearProp);
                }
                else {
                    $location.path('/list/driver-standings/' + this.yearProp);
                }
            }
            

            this.yearSpan = [];
            for(let i = this.yearProp; i >= 1950; i--) {
                this.yearSpan.push(i);
            }

        }
    });