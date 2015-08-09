var myApp = angular.module('app', [ 'ngRoute', 'metatags']);
myApp.config(['$routeProvider', 'MetaTagsProvider', '$locationProvider', function ($routeProvider, MetaTagsProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    controller: 'DeviceController',
    templateUrl: '/templates/iphone.html'
  })
    .when('/iphone', {
      controller: 'DeviceController',
      templateUrl: '/templates/iphone.html'
    })
    .when('/ipad-remont', {
      controller: 'DeviceController',
      templateUrl: '/templates/ipad-remont.html'
    })
    .when('/macbook-remont', {
      controller: 'DeviceController',
      templateUrl: '/templates/macbook-remont.html'
    })
    .when('/about/warranty', {
      templateUrl: '/templates/warranty.html'
    })
    .when('/feedback', {
      controller: 'feedbackController',
      templateUrl: '/templates/feedback.html'
    })
    .when('/remont-iphone3g', {
      controller: 'iphone3gController',
      templateUrl: '/templates/iphone/iphone3g.html'
    })
    .when('/remont-iphone4', {
      controller: 'iphone4Controller',
      templateUrl: '/templates/iphone/iphone4.html'
    })
    .when('/remont-iphone4s', {
      controller: 'iphone4sController',
      templateUrl: '/templates/iphone/iphone4s.html'
    })
    .when('/remont-iphone5', {
      controller: 'iphone5Controller',
      templateUrl: '/templates/iphone/iphone5.html'
    })
    .when('/remont-iphone-5c', {
      controller: 'iphone5cController',
      templateUrl: '/templates/iphone/iphone5c.html'
    })
    .when('/remont-iphone-5s', {
      controller: 'iphone5sController',
      templateUrl: '/templates/iphone/iphone5s.html'
    })
    .when('/remont-iphone-6', {
      controller: 'iphone6Controller',
      templateUrl: '/templates/iphone/iphone6.html'
    })
    .when('/remont-iphone-6plus', {
      controller: 'iphone6plusController',
      templateUrl: '/templates/iphone/iphone6plus.html'
    })
    .when('/remont-ipad1', {
      controller: 'ipad1Controller',
      templateUrl: '/templates/ipad/ipad.html'
    })
    .when('/remont-ipad2', {
      controller: 'ipad2Controller',
      templateUrl: '/templates/ipad/ipad2.html'
    })
    .when('/remont-ipad3', {
      controller: 'ipad3Controller',
      templateUrl: '/templates/ipad/ipad3.html'
    })
    .when('/remont-ipad4', {
      controller: 'ipad4Controller',
      templateUrl: '/templates/ipad/ipad4.html'
    })
    .when('/remont-ipad-air', {
      controller: 'ipadAirController',
      templateUrl: '/templates/ipad/ipadair.html'
    })
    .when('/remont-ipad-air2', {
      controller: 'ipadAirController',
      templateUrl: '/templates/ipad/ipadair2.html'
    })
    .when('/remont-ipad-mini', {
      'url': '/ipad-remont/ipad-mini',
      controller: 'ipadMiniController',
      templateUrl: '/templates/ipad/ipadmini.html'
    })
    .when('/remont-ipad-mini2', {
      controller: 'ipadMini2Controller',
      templateUrl: '/templates/ipad/ipadmini2.html'
    })
    .when('/remont-ipad-mini3', {
      controller: 'ipadMini3Controller',
      templateUrl: '/templates/ipad/ipadmini3.html'
    })
    .when('/remont-imac', {
      controller: 'imacController',
      templateUrl: '/templates/mac/imac.html'
    })
    .when('/remont-macbook-pro', {
      controller: 'macbookProController',
      templateUrl: '/templates/mac/macbookpro.html'
    })
    .when('/remont-macbook-air', {
      controller: 'macbookAirController',
      templateUrl: '/templates/mac/macbookair.html'
    })

    .when('/iphone-byistro-razryazhaetsya', {
      'url': '/iphone-byistro-razryazhaetsya',
      templateUrl: '/templates/problems/iphone-byistro-razryazhaetsya.html'
    })
    .when('/iphone-ne-nazhimayutsya-knopki', {
      'url': '/iphone-ne-nazhimayutsya-knopki',
      templateUrl: '/templates/problems/iphone-ne-nazhimayutsya-knopki.html'
    })
    .when('/iphone-ne-rabotaet-mikrofon', {
      'url': '/iphone-ne-rabotaet-mikrofon',
      templateUrl: '/templates/problems/iphone-ne-rabotaet-mikrofon.html'
    })
    .when('/iphone-ne-vklyuchaetsya', {
      'url': '/iphone-ne-vklyuchaetsya',
      templateUrl: '/templates/problems/iphone-ne-vklyuchaetsya.html'
    })
    .when('/iphone-ne-zaryazhaetsya', {
      'url': '/iphone-ne-zaryazhaetsya',
      templateUrl: '/templates/problems/iphone-ne-zaryazhaetsya.html'
    })
    .when('/ne-nazhimayutsya-knopki-na-iphone', {
      'url': '/ne-nazhimayutsya-knopki-na-iphone',
      templateUrl: '/templates/problems/ne-nazhimayutsya-knopki-na-iphone.html'
    })
    .when('/ne-rabotaet-displey-iphone', {
      'url': '/ne-rabotaet-displey-iphone',
      templateUrl: '/templates/problems/ne-rabotaet-displey-iphone.html'
    })
    .when('/ne-rabotaet-tachskrin-na-iphone', {
      'url': '/ne-rabotaet-tachskrin-na-iphone',
      templateUrl: '/templates/problems/ne-rabotaet-tachskrin-na-iphone.html'
    })
    .when('/ne-rabotaet-vibrozvonok', {
      'url': '/ne-rabotaet-vibrozvonok',
      templateUrl: '/templates/problems/ne-rabotaet-vibrozvonok.html'
    })
    .when('/ne-rabotaet-zvuk-na-iphone', {
      'url': '/ne-rabotaet-zvuk-na-iphone',
      templateUrl: '/templates/problems/ne-rabotaet-zvuk-na-iphone.html'
    })
    .when('/razbilos-steklo-iphone', {
      'url': '/razbilos-steklo-iphone',
      controller: 'problemsPriceTablesController',
      templateUrl: '/templates/problems/razbilos-steklo-iphone.html'
    })
    .when('/voda-iphone', {
      'url': '/voda-iphone',
      templateUrl: '/templates/problems/voda-iphone.html'
    })
    .when('/wifi-ne-rabotaet', {
      'url': '/wifi-ne-rabotaet',
      templateUrl: '/templates/problems/wifi-ne-rabotaet.html'
    })
    .otherwise({
      redirectTo: '/'
    });


  MetaTagsProvider.when('/', {
    title: "Ремонт Apple техники: iPhone iPad MacBook iMac",
    description: "Срочный ремонт Apple iPhone в Киеве. Замена стекла от 200 грн, дисплея от 300 грн, ремонт после воды.",
    robots: "index, follow",
    keywords: "Ремонт iPhone iPad iPod Macbook",
    fb_image: '/img/office.jpg?v=1423413609176'
  })
    .when('/iphone', {
      title: "Ремонт iPhone 3g/3gs/4/4s/5/5s/6 оригинальные запчасти",
      description: "Делаем ремонт всех моделей iPhone, быстро и качественно, Киев ремонт iPhone 4",
      robots: "index, follow",
      keywords: "Ремонт iPhone 3g/3gs/4/4s/5/5s/6"
    })
    .when('/ipad-remont', {
      title: "Ремонт iPad, iPad Mini, iPad Retina iPad Air оригинальные запчасти",
      description: "Профессиональный ремонт iPad в Киеве! Качественный ремонт айпадов всех моделей, доступные цены, хорошее качество!",
      robots: "index, follow",
      keywords: "ремонт ipad (айпад), ремонт ipad mini, ipad retina Киев"
    })
    .when('/macbook-remont', {
      title: "Ремонт MacBook Pro, MacBook Air, iMac",
      description: "Ремонт MacBook в Киеве! Быстрый и Качественный сервис макбуков всех моделей, низкие цены!",
      robots: "index, follow",
      keywords: "ремонт macbook (макбук) киев "
    })
    .when('/about/warranty', {
      title: "Гарантия 2 года от Service-Iphone.com.ua ",
      description: "Наш сервисный центр предоставляет гарантию до 2 лет, на все виды ремонтов техники Apple | ремонт iphone ipad macbook ipod",
      robots: "index, follow",
      keywords: "ремонт iPhone iPad iPod Macbook"
    })
    .when('/feedback', {
      title: "Отзывы о работе сервиса Apple | Service-Iphone",
      description: "Отзывы о работе сервисного центра 'Service-iPhone' Киева по ремонту техники Apple.",
      robots: "index, follow",
      keywords: "ремонт iPhone iPad iPod Macbook"
    })
    .when('/remont-iphone3g', {
      title: "Ремонт iPhone 3G",
      description: "Наш Сервис сделает качественный ремонт iPhone 3g в Киеве с гарантией. Так же делаем ремонт всех моделей iphone.",
      robots: "index, follow",
      keywords: "ремонт iphone 3gs киев, айфон 3g ремонт, iphone 3g ремонт"
    })
    .when('/remont-iphone4', {
      title: "Ремонт iPhone 4",
      description: "Service-iphone сделает качественный ремонт iphone 4 в Киеве с гарантией до 2 лет. Замена стекла, дисплея, кнопки.",
      robots: "index, follow",
      keywords: "Ремонт iPhone 4"
    })
    .when('/remont-iphone4s', {
      title: "Ремонт iPhone 4s",
      description: "Service-iphone сделает качественный ремонт iphone 4s в Киеве с гарантией не менее 2 лет. Замена батареи, аккумулятора, кнопки.",
      robots: "index, follow",
      keywords: "Ремонт iPhone 4s"
    })
    .when('/remont-iphone5', {
      title: "Ремонт iPhone 5",
      description: "Быстрый ремонт iPhone5 в городе Киев. Диагностика iPhone 5/5s/6/6+ бессплатно!",
      robots: "index, follow",
      keywords: "Ремонт iPhone 5"
    })
    .when('/remont-iphone-5c', {
      title: "Ремонт iPhone 5c",
      description: "Service-iphone сделает быстро и качественно ремонт вашего iphone 5c в Киеве в тот же день!.",
      robots: "index, follow",
      keywords: "Ремонт iPhone 5c"
    })
    .when('/remont-iphone-5s', {
      title: "Ремонт iPhone 5s ",
      description: "Киев ремонт и сервис iPhone 5s. Цены на iphone 5s указаны на странице. Цены на ремонт iphone 5s",
      robots: "index, follow",
      keywords: "Ремонт iPhone 5s"
    })
    .when('/remont-iphone-6', {
      title: "Ремонт iPhone 6",
      description: "Требуется ремонт iphone 6? мы вам поможем, сделаем быстро и качественно ремонт iphone 4/4s/5/5s/6/6+",
      robots: "index, follow",
      keywords: "Ремонт iPhone 6"
    })
    .when('/remont-iphone-6plus', {
      title: "Ремонт iPhone 6+ ",
      description: "Iphone 6+ ремонт/замента стекла/дисплея/джойстика/аккумулятора. Замена стекла/батареи/дисплея.",
      robots: "index, follow",
      keywords: "Ремонт iPhone 6+"
    })
    .when('/remont-ipad1', {
      title: "Ремонт iPad 1",
      description: "Срочный ремонт iPad в городе киеве. Даем гарантию 2 года, ремонт в тот же день!",
      robots: "index, follow",
      keywords: "Ремонт iPad 1"
    })
    .when('/remont-ipad2', {
      title: "Ремонт iPad 2",
      description: "Срочный ремонт ipad 2 быстро и качественно, используем только оригинальные детали. Даем гарантию 2 года",
      robots: "index, follow",
      keywords: "Ремонт iPad 2"
    })
    .when('/remont-ipad3', {
      title: "Ремонт iPad 3",
      description: "Service-iphone делает ремонт быстро и качественно с гарантией 2 года, мы починим ваш ipad 3!",
      robots: "index, follow",
      keywords: "Ремонт iPad 3"
    })
    .when('/remont-ipad4', {
      title: "Ремонт iPad 4",
      description: "Цены на ремонт iPad 4 в городе Киеве, Service-iPhone заменит стекло/тачскрин/батарею/wifi и другие детали вашего дивайса!",
      robots: "index, follow",
      keywords: "Ремонт iPad 4"
    })
    .when('/remont-ipad-air', {
      title: "Ремонт iPad air",
      description: "Самый лучший сервис по ремонту iPad air в городе Киеве - Service-iPhone, цены на ремонт вашего ipad air.",
      robots: "index, follow",
      keywords: "Ремонт iPad air"
    })
    .when('/remont-ipad-air2', {
      title: "Ремонт iPad air 2",
      description: "Самый лучший сервис по ремонту iPad air 2 в городе Киеве - Service-iPhone, цены на ремонт вашего iPad Air 2.",
      robots: "index, follow",
      keywords: "Ремонт iPad Air 2"
    })
    .when('/remont-ipad-mini', {
      title: "Ремонт iPad mini",
      description: "Ремонт iPad mini в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Только original запчасти.",
      robots: "index, follow",
      keywords: "Ремонт iPad mini"
    })
    .when('/remont-ipad-mini2', {
      title: "Ремонт iPad mini2",
      description: "Ремонт iPad mini 2 в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Цены на ремонт ipad mini 2.",
      robots: "index, follow",
      keywords: "Ремонт iPad mini2"
    })
    .when('/remont-ipad-mini3', {
      title: "Ремонт iPad mini3",
      description: "Ремонт iPad mini 3 в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Цены на ремонт ipad mini 3.",
      robots: "index, follow",
      keywords: "Ремонт iPad mini3"
    })
    .when('/remont-imac', {
      title: "Ремонт MacBook",
      description: "Ремонт MacBook в Киеве. Профессиональный ремонт MacBook с гарантией до 2х лет. Только original запчасти.",
      robots: "index, follow",
      keywords: "Ремонт MacBook"
    })
    .when('/remont-macbook-pro', {
      title: "Ремонт MacBook Pro",
      description: "Ремонт вашего macbook pro в городе киеве с гарантией до 2 лет, сделает наш Service-Iphone центр!",
      robots: "index, follow",
      keywords: "Ремонт MacBook Pro"
    })
    .when('/remont-macbook-air', {
      title: "Ремонт MacBook Air",
      description: "Качественный ремонт macbook air в городе киеве с гарантией до 2 лет, сделает наш Service-Iphone центр!",
      robots: "index, follow",
      keywords: "Ремонт MacBook Air"
    })

    .when('/iphone-byistro-razryazhaetsya', {
      title: "Ваш iPhone быстро разряжается",
      description: "",
      robots: "index, follow",
      keywords: "iPhone быстро разряжается"
    })
    .when('/iphone-ne-nazhimayutsya-knopki', {
      title: "iPhone не нажимается кнопка",
      description: "Если у вас не нажимается кнопка reset, что нужно делать? наш сервисный центр Service-Iphone поможет сделать ремонт быстро и дешево!",
      robots: "index, follow",
      keywords: "iphone не нажимается кнопка"
    })
    .when('/iphone-ne-rabotaet-mikrofon', {
      title: "Iphone не работает микрофон",
      description: "Что делать когда у вашего смартфона не работает микрофон. Service-Iphone поможет вам починить микрофон и динамик!",
      robots: "index, follow",
      keywords: "iphone не работает микрофон"
    })
    .when('/iphone-ne-vklyuchaetsya', {
      title: "Не включается iPhone",
      description: "Service-iPhone в городе Киеве, сделает ремонт вашего телефона быстро, с гарантией до 2 лет, оригинальные детали.",
      robots: "index, follow",
      keywords: "не ключается iPhone"
    })
    .when('/iphone-ne-zaryazhaetsya', {
      title: "Не заряжается iPhone",
      description: "Если у вас не заряжается iPhone наш service-iphone сделает диагностику бессплатно, и поможет устранить неполадку!",
      robots: "index, follow",
      keywords: "не заряжается iPhone"
    })
    .when('/ne-nazhimayutsya-knopki-na-iphone', {
      title: "Не нажимается кнопка Home на iphone",
      description: "В iPhone не работает кнопка включения и блокировки",
      robots: "index, follow",
      keywords: "Не нажимается кнопка Home на iphone"
    })
    .when('/ne-rabotaet-displey-iphone', {
      title: "Iphone не работает дисплей",
      description: "Наш сервисный центр делает все виды ремонта техники Apple iphone/ipad/macbook/ipod.",
      robots: "index, follow",
      keywords: "Iphone не работает дисплей"
    })
    .when('/ne-rabotaet-tachskrin-na-iphone', {
      title: "iPhone не работает тачскрин ",
      description: "",
      robots: "index, follow",
      keywords: "ремонт тачскрин iphone Киев, iPhone не работает тачскрин"
    })
    .when('/ne-rabotaet-vibrozvonok', {
      title: "Не работает виброзвонок на афйон | iphone вибрация",
      description: "Service-iPhone делает любой сложности ремонт, ",
      robots: "index, follow",
      keywords: "iphone не работает вибро, iphone ремонт вибро "
    })
    .when('/ne-rabotaet-zvuk-na-iphone', {
      title: "Не работает звук iphone | Service-Iphone",
      description: "Не работает звук iphone | Service-Iphone",
      robots: "index, follow",
      keywords: "ремонт звука iphone киев"
    })
    .when('/razbilos-steklo-iphone', {
      title: "разбилось стелко iphone | ремонт Service-iPhone",
      description: "Service iPhone поможет вам сделать быстро и качественно из оригинальный деталей ремонт вашего iphone",
      robots: "index, follow",
      keywords: "ремонт стекло айфон, разбилось стекло iphone"
    })
    .when('/voda-iphone', {
      title: "Попала вода на iphone | Service-Iphone ремонт техники apple",
      description: "Если попала вода в ваш телефон, нас сервисный центр по ремонту техники apple поможет сделать ремонт.",
      robots: "index, follow",
      keywords: "ремон iphone после воды"
    })
    .when('/wifi-ne-rabotaet', {
      title: "Wifi не работает | Service-Iphone ремонт техники apple",
      description: "Ремонт iPhone iPad iPod Macbook | Service-iPhone делает только качественный ремонт",
      robots: "index, follow",
      keywords: "Wifi не работает, Ремонт iPhone iPad iPod Macbook"
    })
    .otherwise({
      title: "Ремонт iPhone iPad iPod Macbook",
      description: "Ремонт iPhone iPad iPod Macbook | Service-iPhone делает только качественный ремонт",
      robots: "index, follow",
      keywords: "Ремонт iPhone iPad iPod Macbook"
    });

}]);

myApp.run(function ($rootScope, MetaTags) {
  $rootScope.dollar = {value: 2.1};
  MetaTags.initialize();
});


