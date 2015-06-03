angular.module('app').controller('imacController', ['$scope', function ($scope) {
    $scope.pricesTable = [
      {
        'tableTitle': 'Основное',
        'rows': [
          {
            'title': 'Диагностика',
            'repear_time': 'от 60 мин.',
            'cost': '0 грн.',
            'description': 'Мы проводим диагностику совершенно бесплатно! Во время диагностики мы выявим причину неполадки и сможем сказать, что именно нужно чинить.'
          },
          {
            'title': 'Ремонт после воды',
            'repear_time': 'от 60 мин.',
            'cost': 'от 300 грн.',
            'description': 'При ремонте после воды, мы сразу проводим чистку и диагностику.'
          },
          {
            'title': 'Чистка от пыли',
            'repear_time': 'от 60 мин.',
            'cost': ' 210 грн.',
            'description': ''
          },
          {
            'title': 'Замена жесткого диска',
            'repear_time': 'от 3 часов.',
            'cost': ' 250 грн.',
            'description': ''
          },
          {
            'title': 'Замена клавиатуры',
            'repear_time': 'от 3 часов.',
            'cost': ' 520 грн.',
            'description': ''
          },
          {
            'title': 'Замена термопасты',
            'repear_time': 'от 60 мин.',
            'cost': ' 350 грн.',
            'description': ''
          },
          {
            'title': 'Замена wi-fi модуля',
            'repear_time': 'от 60 мин.',
            'cost': ' 350 грн.',
            'description': ''
          },
          {
            'title': 'Замена провода на зарядке',
            'repear_time': 'от 60 мин.',
            'cost': ' 260 грн.',
            'description': ''
          },
          {
            'title': 'Ремонт USB',
            'repear_time': 'от 60 мин.',
            'cost': ' 310 грн.',
            'description': ''
          },
          {
            'title': 'Замена батареи',
            'repear_time': '60 мин.',
            'cost': ' 110 грн.',
            'description': ''
          },
          {
            'title': 'Замена жк матрицы',
            'repear_time': 'от 2 часов.',
            'cost': ' 520 грн.',
            'description': ''
          },
          {
            'title': 'Замена оперативной памяти',
            'repear_time': 'от 2 часов.',
            'cost': '130 грн.',
            'description': ''
          },
          {
            'title': 'Замена тачпада',
            'repear_time': 'от 60 мин.',
            'cost': '210 грн.',
            'description': ''
          },
          {
            'title': 'Ремонт разъема зарядки ',
            'repear_time': 'от 60 мин.',
            'cost': '260 грн.',
            'description': ''
          },
          {
            'title': 'Восстановление видеокарты',
            'repear_time': 'от 2 часов.',
            'cost': '900 грн.',
            'description': ''
          },
          {
            'title': 'Замена CD-привода',
            'repear_time': 'от 2 часов.',
            'cost': ' 150 грн.',
            'description': ''
          },
          {
            'title': 'Гравировка клавиатуры ',
            'repear_time': '24 часа.',
            'cost': ' 400 грн.',
            'description': ''
          },
          {
            'title': 'Замена CD-привода на SSD или HDD (optibay)',
            'repear_time': 'от 60 мин.',
            'cost': '150 грн.',
            'description': ''
          },
          {
            'title': 'Замена кулера',
            'repear_time': 'от 60 мин.',
            'cost': '180 грн.',
            'description': ''
          }
        ]
      }
    ];
  }]).controller('macbookProController', ['$scope', function ($scope) {
    $scope.pricesTable = [
      {
        'tableTitle': 'Основное',
        'rows': [
          {
            'title': 'Диагностика',
            'repear_time': 'от 60 мин.',
            'cost': '0 грн.',
            'description': 'Мы проводим диагностику совершенно бесплатно! Во время диагностики мы выявим причину неполадки и сможем сказать, что именно нужно чинить.'
          },
          {
            'title': 'Ремонт после воды',
            'repear_time': 'от 60 мин.',
            'cost': 'от 300 грн.',
            'description': 'При ремонте после воды, мы сразу проводим чистку и диагностику.'
          },
          {
            'title': 'Чистка от пыли',
            'repear_time': 'от 60 мин.',
            'cost': '210 грн.',
            'description': ''
          },
          {
            'title': 'Замена жесткого диска',
            'repear_time': 'от 3 часов.',
            'cost': '250 грн.',
            'description': ''
          },
          {
            'title': 'Замена клавиатуры',
            'repear_time': 'от 3 часов.',
            'cost': '500 грн.',
            'description': ''
          },
          {
            'title': 'Замена термопасты',
            'repear_time': 'от 60 мин.',
            'cost': '350 грн.',
            'description': ''
          },
          {
            'title': 'Замена wi-fi модуля',
            'repear_time': 'от 60 мин.',
            'cost': '320 грн.',
            'description': ''
          },
          {
            'title': 'Замена провода на зарядке',
            'repear_time': 'от 60 мин.',
            'cost': ' 250 грн.',
            'description': ''
          },
          {
            'title': 'Замена стекла',
            'repear_time': 'от 60 мин.',
            'cost': '520 грн.',
            'description': ''
          },
          {
            'title': 'Замена батареи',
            'repear_time': '60 мин.',
            'cost': '110 грн.',
            'description': ''
          },
          {
            'title': 'Замена жк матрицы',
            'repear_time': 'от 2 часов.',
            'cost': '520 грн.',
            'description': ''
          },
          {
            'title': 'Замена оперативной памяти',
            'repear_time': 'от 2 часов.',
            'cost': '150 грн.',
            'description': ''
          },
          {
            'title': 'Замена тачпада',
            'repear_time': 'от 60 мин.',
            'cost': '210 грн.',
            'description': ''
          },
          {
            'title': 'Ремонт разъема зарядки ',
            'repear_time': 'от 60 мин.',
            'cost': '260 грн.',
            'description': ''
          },
          {
            'title': 'Восстановление видеокарты',
            'repear_time': 'от 2 часов.',
            'cost': '900 грн.',
            'description': ''
          },
          {
            'title': 'Замена CD-привода',
            'repear_time': 'от 2 часов.',
            'cost': ' 150 грн.',
            'description': ''
          },
          {
            'title': 'Замена CD-привода на SSD или HDD (optibay)',
            'repear_time': 'от 2 часов.',
            'cost': ' 150 грн.',
            'description': ''
          },
          {
            'title': 'Гравировка клавиатуры ',
            'repear_time': '24 часа.',
            'cost': ' 400 грн.',
            'description': ''
          },
          {
            'title': 'Замена экрана в сборе',
            'repear_time': 'от 60 мин.',
            'cost': '350 грн.',
            'description': ''
          },
          {
            'title': 'Смена программного обеспечения',
            'repear_time': 'от 60 мин.',
            'cost': '300 грн.',
            'description': ''
          }
        ]
      }
    ];
  }]).controller('macbookAirController', ['$scope', function ($scope) {
    $scope.pricesTable = [
      {
        'tableTitle': 'Основное',
        'rows': [
          {
            'title': 'Диагностика',
            'repear_time': 'от 60 мин.',
            'cost': '0 грн.',
            'description': 'Мы проводим диагностику совершенно бесплатно! Во время диагностики мы выявим причину неполадки и сможем сказать, что именно нужно чинить.'
          },
          {
            'title': 'Ремонт после воды',
            'repear_time': 'от 60 мин.',
            'cost': 'от 300 грн.',
            'description': 'При ремонте после воды, мы сразу проводим чистку и диагностику.'
          },
          {
            'title': 'Чистка от пыли',
            'repear_time': 'от 60 мин.',
            'cost': ' 210 грн.',
            'description': ''
          },
          {
            'title': 'Замена жесткого диска',
            'repear_time': 'от 3 часов.',
            'cost': ' 180 грн.',
            'description': ''
          },
          {
            'title': 'Замена клавиатуры',
            'repear_time': 'от 3 часов.',
            'cost': ' 500 грн.',
            'description': ''
          },
          {
            'title': 'Замена термопасты',
            'repear_time': 'от 60 мин.',
            'cost': ' 350 грн.',
            'description': ''
          },
          {
            'title': 'Замена wi-fi модуля',
            'repear_time': 'от 60 мин.',
            'cost': ' 280 грн.',
            'description': ''
          },
          {
            'title': 'Замена провода на зарядке',
            'repear_time': 'от 60 мин.',
            'cost': ' 260 грн.',
            'description': ''
          },
          {
            'title': 'Ремонт USB',
            'repear_time': 'от 60 мин.',
            'cost': ' 320 грн.',
            'description': ''
          },
          {
            'title': 'Замена батареи',
            'repear_time': '60 мин.',
            'cost': ' 110 грн.',
            'description': ''
          },
          {
            'title': 'Замена жк матрицы',
            'repear_time': 'от 2 часов.',
            'cost': ' 800 грн.',
            'description': ''
          },
          {
            'title': 'Замена петли',
            'repear_time': 'от 2 часов.',
            'cost': '500 грн.',
            'description': ''
          },
          {
            'title': 'Замена тачпада',
            'repear_time': 'от 60 мин.',
            'cost': '210 грн.',
            'description': ''
          },
          {
            'title': 'Ремонт разъема зарядки ',
            'repear_time': 'от 60 мин.',
            'cost': '260 грн.',
            'description': ''
          },
          {
            'title': 'Восстановление видеокарты',
            'repear_time': 'от 2 часов.',
            'cost': '900 грн.',
            'description': ''
          },
          {
            'title': 'Гравировка клавиатуры ',
            'repear_time': '24 часа.',
            'cost': ' 400 грн.',
            'description': ''
          },
          {
            'title': 'Замена экрана в сборе',
            'repear_time': 'от 60 мин.',
            'cost': '350 грн.',
            'description': ''
          },
          {
            'title': 'Смена программного обеспечения',
            'repear_time': 'от 60 мин.',
            'cost': '300 грн.',
            'description': ''
          }
        ]
      }
    ];
  }])