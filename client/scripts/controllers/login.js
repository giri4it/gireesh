define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name ngRjGireeshApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the ngRjGireeshApp
   */
  angular.module('ngRjGireeshApp.controllers.LoginCtrl', [])
    .controller('LoginCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
