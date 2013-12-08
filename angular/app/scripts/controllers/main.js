'use strict';

angular.module('angularApp')

  .controller('MainCtrl', function ($scope, Article, $animate) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.texte = 'bonjour toi';
    $scope.items = ['pomme', 'poire', 'cerises'];
    $scope.articles = Article.query();

    $scope.showArticles = function(){
      return $animate.removeClass('articles');
    };

  });
