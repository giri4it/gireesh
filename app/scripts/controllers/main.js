define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name ngRjGireeshApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the ngRjGireeshApp
   */
  angular.module('ngRjGireeshApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
