"use strict";

angular.
    module("f1ListYear").
    component("f1ListYear", {
        templateUrl: "f1-list-year/f1-list-year.template.html",
        controller: [ "$http", "$routeParams", function F1ListYearController($http, $routeParams) {
            let self = this;
            
            console.log("F1 list year")

            self.year = $routeParams.year;

            $http.get("https://ergast.com/api/f1/" + self.year + "/driverStandings.json")
                .then(response => {
                    self.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

                    console.log("DATA",response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
                })
                .catch(err => {
                    console.log("Error", err)
                    self.errorMessage = "Error fetching data";
                });
        }]
    });