/*global angular*/
/*eslint-disable no-unused-vars*/

var app = angular.module('AvaApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/videos/:id', {
            controller: 'VideoController',
            templateUrl: 'views/video.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
