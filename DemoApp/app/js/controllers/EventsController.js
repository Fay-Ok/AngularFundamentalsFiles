'use strict';

eventsApp.controller("EventController", function EventController($scope) {

    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30 am'
    }
});