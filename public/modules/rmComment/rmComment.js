(function(){
	'use strict';

	var rmComment = angular.module('rmComment', ['ngMaterial', 'ngSanitize']);

	rmComment.directive('rmComment', function(){
		return {
			restrict: 'E',
			templateUrl: '/modules/rmComment/rmComment.html',
			scope: {
				comment: '=',
			},
			controller: ['$scope', function($scope){
				$scope.parse = function(input){
					var escMap = {
						'&lt;': '<',
						'&gt;': '>',
						'&amp;': '&',
					};

					input = input.replace(/(&lt;|&gt;|&amp;)/g,
						function(match){
							return escMap[match];
						});

					return input;
				};
			}],
		};
	});
})();