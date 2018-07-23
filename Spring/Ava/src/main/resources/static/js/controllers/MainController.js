app.controller('MainController', ['$scope', 'reader', function($scope, reader) {
    //$scope.greeting = {id: 'xxx', content: 'Hello World!'};
	reader.success(function (data) {
        $scope.greeting = data;
    });
}]);