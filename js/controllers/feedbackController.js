angular.module('app').controller('feedbackController', ['$scope', function ($scope) {
   $scope.comments = [
     {
       'author' : 'Антон',
       'url' : 'http://vk.com/id17291806',
       'date'   : '24.05.2015',
       'text' : 'спасибо за ремонт Service iPhone! Все сделали качественно, пленочку на экран наклеили бессплатно!'
     },
     {
       'author' : 'Сергей Никитюк',
       'url' : '',
       'date'   : '29.05.2015',
       'text' : 'Отдал вчера ребятам свой iphone 5s, на замену батареи! Очень доволен, ребята заменили батарею в тот же день, сейчас батарея держит очень долго. Советую этот сервисный центр!'
     },
     {
       'author' : 'Анастасия',
       'url' : 'http://vk.com/anastasia.kyiv',
       'date'   : '30.05.2015',
       'text' : 'Я разбила свой любимый iphone 6, ребята сделали замену экрана очень быстро, спасибо!'
     },
     {
       'author' : 'Костя Трипайло',
       'url' : 'http://vk.com/id108440837',
       'date'   : '03.06.2015',
       'text' : 'Не работал звук на моем ipad mini. Позвонил, отвез, на след день забрал. Сейчас звук работает, ребята - профессионалы.'
     },
     {
       'author' : 'Алексей Левский',
       'url' : 'http://vk.com/original_va',
       'date'   : '05.06.2015',
       'text' : ''
     },
     {
       'author' : 'Юрий Стилл',
       'url' : 'http://vk.com/madstill',
       'date'   : '07.06.2015',
       'text' : ''
     },
     {
       'author' : 'Михаил Ривоненко',
       'url' : 'http://vk.com/id131650648',
       'date'   : '10.06.2015',
       'text' : ''
     },
     {
       'author' : 'Антон Ерко',
       'url' : 'http://vk.com/id128004706',
       'date'   : '11.06.2015',
       'text' : ''
     },
     {
       'author' : 'Богдан Кожуховский',
       'url' : 'http://vk.com/kontrast_music',
       'date'   : '14.06.2015',
       'text' : ''
     },
     {
       'author' : 'Дмитрий Белоус',
       'url' : 'http://vk.com/deemsofficial',
       'date'   : '14.06.2015',
       'text' : ''
     },
     {
       'author' : 'Виктор Лещук',
       'url' : 'http://vk.com/vyles',
       'date'   : '15.06.2015',
       'text' : ''
     },
     {
       'author' : 'Виктория Ким',
       'url' : 'http://vk.com/id55679520',
       'date'   : '18.06.2015',
       'text' : ''
     },
     {
       'author' : 'Виктория Темнова',
       'url' : 'http://vk.com/viktoriatemnova',
       'date'   : '19.06.2015',
       'text' : ''
     },
     {
       'author' : 'Денис Соколов',
       'url' : '',
       'date'   : '19.06.2015',
       'text' : ''
     },
     {
       'author' : 'Наталия Раилян',
       'url' : 'http://vk.com/natalia_rai',
       'date'   : '21.06.2015',
       'text' : ''
     },
     {
       'author' : 'Денис Тускиев',
       'url' : 'http://vk.com/id168734117',
       'date'   : '22.06.2015',
       'text' : ''
     },
     {
       'author' : 'Максим Михайлович',
       'url' : '',
       'date'   : '23.06.2015',
       'text' : ''
     },
     {
       'author' : 'Аня Сычёва',
       'url' : 'http://vk.com/a_sychova',
       'date'   : '25.06.2015',
       'text' : ''
     },
     {
       'author' : 'Константин Белый',
       'url' : '',
       'date'   : '27.06.2015',
       'text' : ''
     },
     {
       'author' : 'Катя Мороз',
       'url' : 'http://vk.com/id_katy93',
       'date'   : '30.06.2015',
       'text' : ''
     },
     {
       'author' : 'Александр Примак',
       'url' : 'http://vk.com/alexander_primak',
       'date'   : '05.07.2015',
       'text' : ''
     },
     {
       'author' : 'Андрей',
       'url' : 'http://vk.com/id8440874',
       'date'   : '06.07.2015',
       'text' : ''
     },
     {
       'author' : 'Вика Краснова',
       'url' : 'http://vk.com/id215866661',
       'date'   : '07.07.2015',
       'text' : ''
     },
     {
       'author' : 'Віталій Чайковський',
       'url' : 'http://vk.com/id67759538',
       'date'   : '08.07.2015',
       'text' : ''
     },
     {
       'author' : 'Сергій Кащен',
       'url' : '',
       'date'   : '10.07.2015',
       'text' : ''
     },
     {
       'author' : 'Рита',
       'url' : 'http://vk.com/id278751056',
       'date'   : '11.07.2015',
       'text' : ''
     },
     {
       'author' : 'Лёня Журин',
       'url' : 'http://vk.com/id180148753',
       'date'   : '12.07.2015',
       'text' : ''
     },
     {
       'author' : 'Alisa ',
       'url' : 'http://vk.com/vox_alisa',
       'date'   : '13.07.2015',
       'text' : ''
     },
     {
       'author' : 'Оношко',
       'url' : 'http://vk.com/id28697379',
       'date'   : '14.07.2015',
       'text' : ''
     },
     {
       'author' : 'Сергей',
       'url' : '',
       'date'   : '17.07.2015',
       'text' : ''
     },
     {
       'author' : 'Мария Сергеевна',
       'url' : 'http://vk.com/id49332360',
       'date'   : '20.07.2015',
       'text' : ''
     },
     {
       'author' : 'Синтар Аркан',
       'url' : '',
       'date'   : '21.07.2015',
       'text' : ''
     },
     {
       'author' : 'Анастасия Мендерова',
       'url' : 'http://vk.com/menderenok',
       'date'   : '21.07.2015',
       'text' : ''
     },
     {
       'author' : 'Ростислав Муляр',
       'url' : 'http://vk.com/rostislav_kiev',
       'date'   : '22.07.2015',
       'text' : ''
     }
   ]
  }])