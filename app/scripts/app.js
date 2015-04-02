(function () {
  'use strict';

  angular.module('u15RCApp', [
    'ngRoute',
    'ngMaterial',
    'matchMedia'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .when('/form', {
          templateUrl: 'views/form.html',
          controller: 'FormCtrl'
        })
        .when('/rising-star', {
          templateUrl: 'views/rising-star.html',
          controller: 'RisingStarCtrl'
        })
        .when('/sports-icon', {
          templateUrl: 'views/sports-icon.html',
          controller: 'SportsIconCtrl'
        })
        .when('/face-of-the-year', {
          templateUrl: 'views/face-of-the-year.html',
          controller: 'FaceCtrl'
        })
        .otherwise({
          redirectTo: '/login'
        })
    });

})();