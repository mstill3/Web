mainApp.controller('AnalysisController', ['$scope', 'analysis', function ($scope, analysis) {
    analysis.then(function successCallback(response) {
        $scope.fiveDay = response.data;
    });
}]);
