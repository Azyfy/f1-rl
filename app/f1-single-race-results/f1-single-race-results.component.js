"use strict";

angular.
    module("f1SingleRaceResults").
    component("f1SingleRaceResults", {
        templateUrl: "f1-single-race-results/f1-single-race-results.template.html",
        controller: [ "$http", "$routeParams", function F1Drivf1SingleDriverResultsController($http, $routeParams) {
            console.log("F1 race results")
            let self = this;

            self.searchFilter = "";

            self.year = $routeParams.year;
            self.round = $routeParams.round;

            console.log("THIS", this.year)
            console.log("THIS", this.round)

            self.pickDriver = (driverData) => {
                console.log(driverData)
                self.driverDetails = driverData;
            };

            $http.get("https://ergast.com/api/f1/" + self.year + "/" + self.round + "/results.json")
                .then(response => {
                    console.log("DATA RACE",response.data.MRData.RaceTable.Races[0]);
                    self.race = response.data.MRData.RaceTable.Races[0];
                })
                .catch(err => {
                    console.log("Error", err)
                    self.errorMessage = "Error fetching data";
                });

        }]
    });