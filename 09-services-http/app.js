'use strict';

angular.module('tutorialApp', [])
  .controller('ArticlesCtrl', function($scope, $http){
    $http.get('articles.json').then(function(articlesResponse) {
      $scope.articles = articlesResponse.data;
    });
  });
