angular.module('app').controller('feedbackController', ['$scope', function ($scope) {
   $scope.comments = [
     {
       'author' : 'Антон',
       'url' : 'http://vk.com/id17291806',
       'date'   : '24.05.2015',
       'text' : 'спасибо ребята за ремонт! Все сделали круто'

     },
     {
       'author' : 'Сергей',
       'url' : '',
       'date'   : '24.05.2015',
       'text' : 'спасибо ребята за ремонт'
     }
   ]
  }])