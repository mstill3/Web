app.controller('VideoController', ['$scope', 'videos', '$routeParams', function ($scope, videos, $routeParams) {
    videos.success(function (data) {
        $scope.detail = data[$routeParams.id];
    });
}]);
