mainApp.controller('GetFilesController', function ($scope, $http) {

    $scope.allFiles = [];


    $scope.getAllFiles = function () {

        // REST URL:
        var url = "/Witch-Hunt/getAllFiles";
        $http.get(url).then(
            // Success
            function (response) {
                alert("OK");
                $scope.allFiles = response.data;
            },
            // Error
            function (response) {
                alert("Error: " + response.data);
            }
        );
    };
});
