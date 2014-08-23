'use strict';

/**
 * @ngdoc overview
 * @name d3OnAngularSeedApp
 * @description
 * # d3OnAngularSeedApp
 *
 * Main module of the application.
 */
angular
  .module('d3OnAngularSeedApp', [
    'ngResource',
    'ngRoute',
    'd3'
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
      .otherwise({
        redirectTo: '/'
      });
  });
