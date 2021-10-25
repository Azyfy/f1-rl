"use strict";

angular.
    module("f1List").
    component("f1List", {
        templateUrl: "f1-list/f1-list.template.html",
        controller: function F1ListController($location) {
            console.log("F1 list log")

            this.yearProp = new Date().getFullYear();

            this.onChange = function () {
                console.log("P", $location.path())
                if($location.path().includes("some value")) {
                    $location.path('/list/some value/' + this.yearProp);
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