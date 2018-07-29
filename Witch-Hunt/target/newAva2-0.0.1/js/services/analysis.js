mainApp.factory('analysis', ['$http', function ($http) {

//    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json').then(
    return $http.get('json/gold.json').then(
	    //success
        function (response) {
            return response;
        },
        //error
        function (err) {
            return err;
        }
    );

}]);
