describe('myApp', function(){

  beforeEach(module('myApp'));

  it('Did you create the function $scope.minusOne()?', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});

    expect(scope.minusOne).toBeDefined();
  }));

  it('On the <p class="dislikes"> element, make sure to use ng-click to call the minusOne() function.', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});
    scope.minusOne(0);
    expect(scope.products[0].dislikes).toBe(1);
  }));
});