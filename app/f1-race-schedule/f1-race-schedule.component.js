"use strict";

angular.
    module("f1RaceSchedule").
    component("f1RaceSchedule", {
        templateUrl: "f1-race-schedule/f1-race-schedule.template.html",
        controller: ["$http", "$routeParams", function F1RaceSchedule($http, $routeParams) {
            console.log("F1 schedule")
            let self = this;

            self.year = $routeParams.year;

            console.log(self.year)

            $http.get("https://ergast.com/api/f1/" + self.year + ".json")
                .then(response => {
                    self.races = response.data.MRData.RaceTable.Races;
                })
                .catch(err => {
                    console.log("Error", err)
                    self.errorMessage = "Error fetching data";
                });
        }]
    });