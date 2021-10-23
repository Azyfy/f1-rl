"use strict";

angular.
    module("f1List").
    component("f1List", {
        templateUrl: "f1-list/f1-list.template.html",
        controller: [ "$http", function F1ListController($http) {
            console.log("F1 list log")
            let self = this;

            $http.get("https://ergast.com/api/f1/2021/driverStandings.json")
                .then(response => {
                    self.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                    console.log("DATA",response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
                });
        }]
    });