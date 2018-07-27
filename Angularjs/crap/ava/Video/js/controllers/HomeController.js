app.controller('HomeController', ['$scope', 'videos', function ($scope, videos) {
    videos.success(function (data) {
        $scope.videos = data;
    });
}]);
