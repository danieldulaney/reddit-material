(function(){
'use strict';

var rmDisplay = angular.module('rmDisplay', ['ngMaterial', 'rmPost', 'rmComment', 'RecursionHelper']);

rmDisplay.directive('rmDisplay', function(RecursionHelper){
	return {
		restrict: 'E',
		templateUrl: '/modules/rmDisplay/rmDisplay.html',
		scope: {
			item: '=',
			redditurl: '=',
		},
		compile: function(element) {
			return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){	// jshint ignore:line
				// Define your normal link function here.
				// Alternative: instead of passing a function,
				// you can also pass an object with 
				// a 'pre'- and 'post'-link function.
			});
		},
		controller: ['$scope', '$http', function($scope, $http){
			if($scope.redditurl && !$scope.item){
				$http.get('https://api.reddit.com' + $scope.redditurl).then(function(res){
					$scope.item = res.data;
				});
			}
		}]
	};
});

})();