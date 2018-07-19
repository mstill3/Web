app.controller('MainController', ['$scope', function ($scope) {
    $scope.today = new Date();

    $scope.appetizers = [
        {
            name: 'Caprese',
            description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
            price: 4.95
        },
        {
            name: 'Mozzarella Sticks',
            description: 'Served with marinara sauce.',
            price: 3.95
        },
        {
            name: 'Bruschetta',
            description: 'Grilled bread garlic, tomatoes, olive oil.',
            price: 4.95
    }
  ];

    $scope.mains = [
        {
            name: 'Fries',
            description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
            price: 4.95
        },
        {
            name: 'Cheese Burger',
            description: 'Served with marinara sauce.',
            price: 3.95
        },
        {
            name: 'Pizza',
            description: 'Grilled bread garlic, tomatoes, olive oil.',
            price: 4.95
    }
  ];

    $scope.extras = [
        {
            name: 'Relish',
            description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
            price: 4.95
        },
        {
            name: 'Ketchup',
            description: 'Served with marinara sauce.',
            price: 3.95
        },
        {
            name: 'Mustard',
            description: 'Grilled bread garlic, tomatoes, olive oil.',
            price: 4.95
    }
  ];

}]);
