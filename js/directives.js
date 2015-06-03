angular.module('app')
  .directive('siteHeader', function () {
    return {
      restrict: 'A',
      templateUrl: '/js/views/header.html',
      controller: function ($scope) {
        $scope.menuItems = [
          {'href': 'iphone', 'title': 'iPhone', 'text': 'iPhone', selected: ''},
          {'href': 'ipad-remont', 'title': 'iPad', 'text': 'iPad'},
          {'href': 'macbook-remont', 'title': 'MacBook', 'text': 'MacBook'},
          {'href': 'remont-ipod', 'title': 'iPod', 'text': 'iPod'}
        ];
      }
    }
  })