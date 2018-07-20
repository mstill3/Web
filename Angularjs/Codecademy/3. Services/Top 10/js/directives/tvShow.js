/*global angular*/
/*eslint-disable no-unused-vars*/

app.directive('tvShow', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/tvShow.html'
    }
})
