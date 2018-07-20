app.directive('game', function () {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'js/directives/game.html'
    }
})
