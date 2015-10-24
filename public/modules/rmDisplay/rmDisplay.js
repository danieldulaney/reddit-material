(function(){
'use strict';

var rmDisplay = angular.module('rmDisplay', ['ngAngular']);

rmDisplay.directive('rmDisplay', function(){
	return {
		restrict: 'E',
		templateUrl: 'rmDisplay.html',
		scope: {
			item: '=item',
		}
	};
});

})();