'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, Article) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.texte = 'bonjour toi';
    $scope.items = ['pomme', 'poire', 'cerises'];
    $scope.articles = Article.query();
  })
  .factory('Article', function($resource) {
      return $resource('api/v1/articles', {}, {
        query: { method: 'GET' }
      });
    });
