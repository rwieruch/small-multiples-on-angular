'use strict';

/**
 * @ngdoc function
 * @name d3OnAngularSeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the d3OnAngularSeedApp
 */
angular.module('d3OnAngularSeedApp')
  .controller('MainCtrl', function ($scope) {
  	// Hard coded data
    $scope.datasets = [
    	[ 
        {date: '4-Apr-12', close: 34},
        {date: '5-Apr-12', close: 45},
        {date: '6-Apr-12', close: 37},
        {date: '7-Apr-12', close: 56},
        {date: '8-Apr-12', close: 50},
      	{date: '9-Apr-12', close: 77}
    	],
    	[ 
        {date: '4-Apr-12', close: 55},
        {date: '5-Apr-12', close: 25},
        {date: '6-Apr-12', close: 47},
        {date: '7-Apr-12', close: 77},
        {date: '8-Apr-12', close: 67},
      	{date: '9-Apr-12', close: 85}
    	],
    	[ 
        {date: '4-Apr-12', close: 77},
        {date: '5-Apr-12', close: 64},
        {date: '6-Apr-12', close: 47},
        {date: '7-Apr-12', close: 56},
        {date: '8-Apr-12', close: 66},
      	{date: '9-Apr-12', close: 33}
    	]
    ];
  });
