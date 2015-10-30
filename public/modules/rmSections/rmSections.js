(function(){
'use strict';

var rmSections = angular.module('rmSections', ['ngMaterial']);

rmSections.directive('rmContainer', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '/modules/rmSections/rmContainer.html',
	};
});

rmSections.directive('rmSection', function(){
	return {
		restrict: 'AE',
		transclude: true,
		templateUrl: '/modules/rmSections/rmSection.html',
		controller: ['$scope', function($scope){

			$scope.closeSection = function($event){
				console.log('Close ' + $event);
			};
		}],
	};
});
})();