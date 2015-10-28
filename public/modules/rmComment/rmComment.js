(function(){
	'use strict';

	var rmComment = angular.module('rmComment', ['ngMaterial', 'ngSanitize']);

	// This increases the digest iterations from 10 to 20 before failure
	// It's probably a bad idea
	// More than 8 nested comments push the iterations above 10
	rmComment.config(function($rootScopeProvider){
		$rootScopeProvider.digestTtl(20);
	});

	rmComment.directive('rmComment', function(){
		return {
			restrict: 'E',
			templateUrl: '/modules/rmComment/rmComment.html',
			scope: {
				comment: '=',
			},
			controller: ['$scope', function($scope){
				if(!$scope.comment.nest){
					$scope.comment.nest = 0;
				}

				if($scope.comment.data.replies){
					for (var i = $scope.comment.data.replies.data.children.length - 1; i >= 0; i--) {
						$scope.comment.data.replies.data.children[i].nest = $scope.comment.nest + 1;
					}
				}


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