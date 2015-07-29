myApp.controller('DeviceController', ['$scope', function ($scope) {
    $scope.menuIphone = [
      {
        'href': '/remont-iphone3g',
        'text': 'iPhone 3G и 3GS',
        'title': '',
        'imgSrc': 'img/iphone/iphone3s.jpg',
        'imgAlt': 'Ремонт Iphone 3G'
      },
      {
        'href': '/remont-iphone4',
        'text': 'iPhone 4',
        'title': '',
        'imgSrc': 'img/iphone/iphone4.jpg',
        'imgAlt': 'Ремонт Iphone 4'
      },
      {
        'href': '/remont-iphone4s',
        'text': 'iPhone 4s',
        'title': '',
        'imgSrc': 'img/iphone/iphone4s.jpg',
        'imgAlt': 'Ремонт Iphone 4S'
      },
      {
        'href': '/remont-iphone5',
        'text': 'iPhone 5',
        'title': '',
        'imgSrc': 'img/iphone/iphone5.jpg',
        'imgAlt': 'Ремонт Iphone 5'
      },
      {
        'href': '/remont-iphone-5c',
        'text': 'iPhone 5c',
        'title': '',
        'imgSrc': 'img/iphone/iphone5c.jpg',
        'imgAlt': 'Ремонт Iphone 5C'
      },
      {
        'href': '/remont-iphone-5s',
        'text': 'iPhone 5s',
        'title': '',
        'imgSrc': 'img/iphone/iphone5s.jpg',
        'imgAlt': 'Ремонт Iphone 5S'
      },
      {
        'href': '/remont-iphone-6',
        'text': 'iPhone 6',
        'title': '',
        'imgSrc': 'img/iphone/iphone6.jpg',
        'imgAlt': 'Ремонт Iphone 6'
      },
      {
        'href': '/remont-iphone-6plus',
        'text': 'iPhone 6 Plus',
        'title': '',
        'imgSrc': 'img/iphone/iphone6plus.jpg',
        'imgAlt': 'Ремонт Iphone 6 Plus'
      }
    ];
    $scope.menuIpad = [
      {
        'href': '/remont-ipad1',
        'text': 'iPad 1',
        'title': '',
        'imgSrc': 'img/ipad/ipad1.jpg',
        'imgAlt': 'Ремонт iPad'
      },
      {
        'href': '/remont-ipad2',
        'text': 'iPad 2',
        'title': '',
        'imgSrc': 'img/ipad/ipad2.jpg',
        'imgAlt': 'Ремонт iPad 2'
      },
      {
        'href': '/remont-ipad3',
        'text': 'iPad 3',
        'title': '',
        'imgSrc': 'img/ipad/ipad3.jpg',
        'imgAlt': 'Ремонт iPad 3'
      },
      {
        'href': '/remont-ipad4',
        'text': 'iPad 4',
        'title': '',
        'imgSrc': 'img/ipad/ipad4.jpg',
        'imgAlt': 'Ремонт iPad 4'
      },
      {
        'href': '/remont-ipad-mini',
        'text': 'iPad Mini',
        'title': '',
        'imgSrc': 'img/ipad/ipad_mini.jpg',
        'imgAlt': 'Ремонт iPad mini retina'
      },
      {
        'href': '/remont-ipad-mini2',
        'text': 'iPad Mini2',
        'title': '',
        'imgSrc': 'img/ipad/ipad_mini2.jpg',
        'imgAlt': 'Ремонт iPad mini2 retina'
      },
      {
        'href': '/remont-ipad-air',
        'text': 'iPad Air',
        'title': '',
        'imgSrc': 'img/ipad/ipad_air.jpg',
        'imgAlt': 'Ремонт iPad'
      }
    ];
    $scope.menuMacbook = [
      {
        'href': '/remont-macbook-pro',
        'text': 'MacBook Pro',
        'title': '',
        'imgSrc': 'img/macbook/pro.jpg',
        'imgAlt': 'Ремонт MacBook Pro'
      },
      {
        'href': '/remont-macbook-air',
        'text': 'MacBook Air',
        'title': '',
        'imgSrc': 'img/macbook/air.jpg',
        'imgAlt': 'Ремонт MacBook Air'
      },
      {
        'href': '/remont-imac',
        'text': 'MacBook',
        'title': '',
        'imgSrc': 'img/macbook/mac.jpg',
        'imgAlt': 'Ремонт iMac'
      }
    ];
    $scope.problemCases = [
      {
        'href': 'razbilos-steklo-iphone',
        'text': 'Разбилось стекло',
        'title': '',
        'iconName': 'icon-hammer'
      },
      {
        'href': 'iphone-ne-vklyuchaetsya',
        'text': 'Не включается',
        'title': '',
        'iconName': 'icon-no-mobile'
      },
      {
        'href': 'wifi-ne-rabotaet',
        'text': 'Не работает Wi-Fi',
        'title': '',
        'iconName': 'icon-wifi'
      },
      {
        'href': 'ne-rabotaet-zvuk-na-iphone',
        'text': 'Не работает звук',
        'title': '',
        'iconName': 'icon-mute'
      },
      {
        'href': 'ne-rabotaet-displey-iphone',
        'text': 'Не работает дисплей',
        'title': '',
        'iconName': 'icon-tv'
      },
      {
        'href': 'iphone-ne-zaryazhaetsya',
        'text': 'Не заряжается',
        'title': '',
        'iconName': 'icon-charge'
      },
      {
        'href': 'voda-iphone',
        'text': 'Попала вода',
        'title': '',
        'iconName': 'icon-water'
      },
      {
        'href': 'ne-rabotaet-vibrozvonok',
        'text': 'Не работает вибрация',
        'title': '',
        'iconName': 'icon-bell'
      },
      {
        'href': 'ne-rabotaet-displey-iphone',
        'text': 'Не работает тачскрин',
        'title': '',
        'iconName': 'icon-finger'
      },
      {
        'href': 'iphone-byistro-razryazhaetsya',
        'text': 'Быстро разряжается',
        'title': '',
        'iconName': 'icon-low-battery'
      },
      {
        'href': 'iphone-ne-nazhimayutsya-knopki',
        'text': 'Не работают кнопки',
        'title': '',
        'iconName': 'icon-circle'
      },
      {
        'href': 'iphone-ne-rabotaet-mikrofon',
        'text': 'Не работает микрофон',
        'title': '',
        'iconName': 'icon-microphone'
      }
    ];

  }]).controller('problemsPriceTablesController', ['$scope', function ($scope) {
    $scope.columns = [
      'Услуга',
      'iPhone 3G/3GS',
      'iPhone 4',
      'iPhone 4S',
      'iPhone 5',
      'iPhone 5C',
      'iPhone 5S',
      'iPhone 6',
      'iPhone 6+'
    ]
    $scope.rows = [
      {
        'Услуга': 'Замена стекла и дисплея (модулем)',
        'iPhone 3G/3GS': '400 грн',
        'iPhone 4': '850 грн',
        'iPhone 5': '1200 грн',
        'iPhone 5C': '1200 грн',
        'iPhone 4S': '850 грн',
        'iPhone 5S': '1200 грн',
        'iPhone 6': '4500 грн',
        'iPhone 6+': '10500 грн'
      },
      {
        'Услуга': 'Замена дисплея (отдельно)',
        'iPhone 3G/3GS': '350 грн',
        'iPhone 4': '850 грн',
        'iPhone 5': '1200 грн',
        'iPhone 5C': '1200 грн',
        'iPhone 4S': '850 грн',
        'iPhone 5S': '1200 грн',
        'iPhone 6': '4500 грн',
        'iPhone 6+': '105000 грн'
      },
      {
        'Услуга': 'Замена переднего стекла (отдельно)',
        'iPhone 3G/3GS': '250 грн',
        'iPhone 4': '600 грн',
        'iPhone 5': '800 грн',
        'iPhone 5C': '800 грн',
        'iPhone 4S': '600 грн',
        'iPhone 5S': '800 грн',
        'iPhone 6': '2400 грн',
        'iPhone 6+': '3000 грн'
      }
    ]
    $scope.body = [

    ]
  }])

