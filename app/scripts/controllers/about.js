define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name ngRjGireeshApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the ngRjGireeshApp
   */
  angular.module('ngRjGireeshApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
