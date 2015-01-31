/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/login']/*deps*/, function (angular, MainCtrl, AboutCtrl, LoginCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name ngRjGireeshApp
   * @description
   * # ngRjGireeshApp
   *
   * Main module of the application.
   */
  return angular
    .module('ngRjGireeshApp', ['ngRjGireeshApp.controllers.MainCtrl',
'ngRjGireeshApp.controllers.AboutCtrl',
'ngRjGireeshApp.controllers.LoginCtrl',
/*angJSDeps*/
    'ngCookies',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
