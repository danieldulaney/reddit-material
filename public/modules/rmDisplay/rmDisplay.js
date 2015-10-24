(function(){
'use strict';

var rmDisplay = angular.module('rmDisplay', ['ngMaterial', 'rmPost']);

rmDisplay.directive('rmDisplay', function(){
	return {
		restrict: 'E',
		templateUrl: '/modules/rmDisplay/rmDisplay.html',
		scope: {
			item: '=item',
		}
	};
});

})();