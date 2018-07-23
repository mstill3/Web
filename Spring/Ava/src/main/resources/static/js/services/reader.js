app.factory('reader', ['$http', function ($http) {
    return $http.get('/resource/')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);