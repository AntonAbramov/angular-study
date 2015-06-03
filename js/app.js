angular.module('app', ['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        'url': '',
        controller: 'DeviceController',
        templateUrl: '/templates/iphone.html'
      })
      .state('start', {
        'url': '/',
        controller: 'DeviceController',
        templateUrl: '/templates/iphone.html'
      })
      .state('iphone-remont', {
        'url': '/iphone',
        controller: 'DeviceController',
        templateUrl: '/templates/iphone.html'
      })
      .state('ipad-remont', {
        'url': '/ipad-remont',
        controller: 'DeviceController',
        templateUrl: '/templates/ipad-remont.html'
      })
      .state('macbook-remont', {
        'url': '/macbook-remont',
        controller: 'DeviceController',
        templateUrl: '/templates/macbook-remont.html'
      })
      .state('warranty', {
        'url': '/about/warranty',
        templateUrl: '/templates/warranty.html'
      })
      .state('feedback', {
        'url': '/feedback',
        controller: 'feedbackController',
        templateUrl: '/templates/feedback.html'
      })
      .state('iphone3g', {
        'url': '/remont-iphone/iphone-3g',
        controller: 'iphone3gController',
        templateUrl: '/js/views/prices-iphone.html'
      })
      .state('iphone4', {
        'url': '/remont-iphone/iphone-4',
        controller: 'iphone4Controller',
        templateUrl: '/js/views/prices-iphone.html'
      })
      .state('iphone4s', {
        'url': '/remont-iphone/iphone-4s',
        controller: 'iphone4sController',
        templateUrl: '/js/views/prices-iphone.html'
      })
    .state('iphone5', {
        'url': '/remont-iphone/iphone-5',
        controller: 'iphone5Controller',
        templateUrl: '/js/views/prices-iphone.html'
      })
    .state('iphone-5c', {
        'url': '/remont-iphone/iphone-5c',
        controller: 'iphone5cController',
        templateUrl: '/js/views/prices-iphone.html'
      })
    .state('iphone-5s', {
        'url': '/remont-iphone/iphone-5s',
        controller: 'iphone5sController',
        templateUrl: '/js/views/prices-iphone.html'
      })
    .state('iphone-6', {
        'url': '/remont-iphone/iphone-6',
        controller: 'iphone6Controller',
        templateUrl: '/js/views/prices-iphone.html'
      })
    .state('iphone-6plus', {
        'url': '/remont-iphone/iphone-6plus',
        controller: 'iphone6plusController',
        templateUrl: '/js/views/prices-iphone.html'
      })
    .state('ipad1', {
        'url': '/ipad-remont/ipad1',
        controller: 'ipad1Controller',
        templateUrl: '/js/views/prices-ipad.html'
      })
    .state('ipad2', {
        'url': '/ipad-remont/ipad2',
        controller: 'ipad2Controller',
        templateUrl: '/js/views/prices-ipad.html'
      })
    .state('ipad3', {
        'url': '/ipad-remont/ipad3',
        controller: 'ipad3Controller',
        templateUrl: '/js/views/prices-ipad.html'
      })
    .state('ipad4', {
        'url': '/ipad-remont/ipad4',
        controller: 'ipad4Controller',
        templateUrl: '/js/views/prices-ipad.html'
      })
    .state('ipad-air', {
        'url': '/ipad-remont/ipad-air',
        controller: 'ipadAirController',
        templateUrl: '/js/views/prices-ipad.html'
      })
    .state('ipad-mini', {
        'url': '/ipad-remont/ipad-mini',
        controller: 'ipadMiniController',
        templateUrl: '/js/views/prices-ipad.html'
      })
    .state('ipad-mini2', {
        'url': '/ipad-remont/ipad-mini2',
        controller: 'ipadMini2Controller',
        templateUrl: '/js/views/prices-ipad.html'
      })
    .state('mac', {
        'url': '/macbook-remont/imac',
        controller: 'imacController',
        templateUrl: '/js/views/prices-ipad.html'
      })
    .state('macbookPro', {
        'url': '/macbook-remont/macbook-pro',
        controller: 'macbookProController',
        templateUrl: '/js/views/prices-ipad.html'
      })
    .state('macbookAir', {
        'url': '/macbook-remont/macbook-air',
        controller: 'macbookAirController',
        templateUrl: '/js/views/prices-ipad.html'
      })

    .state('iphone-byistro-razryazhaetsya', {
        'url': '/iphone-byistro-razryazhaetsya',
        templateUrl: '/templates/problems/iphone-byistro-razryazhaetsya.html'
      })
    .state('iphone-ne-nazhimayutsya-knopki', {
        'url': '/iphone-ne-nazhimayutsya-knopki',
        templateUrl: '/templates/problems/iphone-ne-nazhimayutsya-knopki.html'
      })
    .state('iphone-ne-rabotaet-mikrofon', {
        'url': '/iphone-ne-rabotaet-mikrofon',
        templateUrl: '/templates/problems/iphone-ne-rabotaet-mikrofon.html'
      })
    .state('iphone-ne-vklyuchaetsya', {
        'url': '/iphone-ne-vklyuchaetsya',
        templateUrl: '/templates/problems/iphone-ne-vklyuchaetsya.html'
      })
    .state('iphone-ne-zaryazhaetsya', {
        'url': '/iphone-ne-zaryazhaetsya',
        templateUrl: '/templates/problems/iphone-ne-zaryazhaetsya.html'
      })
    .state('ne-nazhimayutsya-knopki-na-iphone', {
        'url': '/ne-nazhimayutsya-knopki-na-iphone',
        templateUrl: '/templates/problems/ne-nazhimayutsya-knopki-na-iphone.html'
      })
    .state('ne-rabotaet-displey-iphone', {
        'url': '/ne-rabotaet-displey-iphone',
        templateUrl: '/templates/problems/ne-rabotaet-displey-iphone.html'
      })
    .state('ne-rabotaet-tachskrin-na-iphone', {
        'url': '/ne-rabotaet-tachskrin-na-iphone',
        templateUrl: '/templates/problems/ne-rabotaet-tachskrin-na-iphone.html'
      })
    .state('ne-rabotaet-vibrozvonok', {
        'url': '/ne-rabotaet-vibrozvonok',
        templateUrl: '/templates/problems/ne-rabotaet-vibrozvonok.html'
      })
    .state('ne-rabotaet-zvuk-na-iphone', {
        'url': '/ne-rabotaet-zvuk-na-iphone',
        templateUrl: '/templates/problems/ne-rabotaet-zvuk-na-iphone.html'
      })
    .state('razbilos-steklo-iphone', {
        'url': '/razbilos-steklo-iphone',
        controller: 'problemsPriceTablesController',
        templateUrl: '/templates/problems/razbilos-steklo-iphone.html'
      })
    .state('voda-iphone', {
        'url': '/voda-iphone',
        templateUrl: '/templates/problems/voda-iphone.html'
      })
    .state('wifi-ne-rabotaet', {
        'url': '/wifi-ne-rabotaet',
        templateUrl: '/templates/problems/wifi-ne-rabotaet.html'
      });

//    $locationProvider.html5Mode(true)

    //$scope.dollar = 8;
  }]).run(function($rootScope) {
  $rootScope.dollar = {value: 822}
});
