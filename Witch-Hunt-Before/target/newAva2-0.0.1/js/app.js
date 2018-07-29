var mainApp = angular.module('MainApp', ['ngRoute']);

mainApp.config(function ($routeProvider) {
    $routeProvider
        .when('/upload', {
            controller: 'UploadFileController',
            templateUrl: 'templates/upload.html'
        })
        .when('/analyze', {
            controller: 'AnalysisController',
            templateUrl: 'templates/analyze.html'
        })
        .otherwise({
            redirectTo: '/upload'
        });
});