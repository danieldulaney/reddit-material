(function(){
'use strict';

var rmDisplay = angular.module('rmDisplay', ['ngMaterial', 'rmPost', 'RecursionHelper']);

rmDisplay.directive('rmDisplay', function(RecursionHelper){
	return {
		restrict: 'E',
		templateUrl: '/modules/rmDisplay/rmDisplay.html',
		scope: {
			item: '=item',
		},
		compile: function(element) {
			return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
				// Define your normal link function here.
				// Alternative: instead of passing a function,
				// you can also pass an object with 
				// a 'pre'- and 'post'-link function.
			});
		}
	};
});

})();