myApp.directive('siteHeader', function () {
  return {
    restrict: 'A',
    templateUrl: '/templates/header.html',
    controller: function ($scope) {
      $scope.menuItems = [
        {'href': 'iphone', 'title': 'Ремонт iPhone', 'text': 'iPhone', selected: ''},
        {'href': 'ipad-remont', 'title': 'Ремонт iPad', 'text': 'iPad'},
        {'href': 'macbook-remont', 'title': 'Ремонт MacBook', 'text': 'MacBook'},
        {'href': 'remont-ipod', 'title': 'Ремонт iPod', 'text': 'iPod'}
      ];
    }
  }
}).directive('pricesTable', function () {
  return {
    restrict: 'E',
    templateUrl: '/templates/prices-table.html',
    controller: function ($scope) {
    }
  }
});