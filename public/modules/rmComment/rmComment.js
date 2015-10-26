(function(){
	'use strict';

	var rmComment = angular.module('rmComment', ['ngMaterial', 'ngSanitize', 'btford.markdown']);

	rmComment.directive('rmComment', function(){
		return {
			restrict: 'E',
			templateUrl: '/modules/rmComment/rmComment.html',
			scope: {
				comment: '=',
			},
			controller: ['$scope', '$sanitize', function($scope){
				$scope.parseHTML = function(input){
					console.log('Started with ' + input);
					input.replace('&lt;', '<');
					input.replace('&gt;', '>');
					console.log('Ended with ' + input);
					return input;
				};
			}],
		};
	});
})();