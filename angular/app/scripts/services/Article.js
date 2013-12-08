'use strict';

angular.module('angularApp')
  .factory('Article', function($resource) {
      return $resource('api/v1/articles', {}, {
        query: { method: 'GET' }
      });
    });
