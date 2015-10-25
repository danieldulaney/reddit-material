(function(){
'use strict';

var rmPost = angular.module('rmPost', ['rmApp', 'ngMaterial']);

rmPost.directive('rmPost', function(){
	return {
		restrict: 'E',
		templateUrl: '/modules/rmPost/rmPost.html',
		scope: {
			post: '=post',
		},
		controller: ['$scope', function($scope){
			$scope.postUrlType = function(domain){
				if(/imgur.com/.test(domain)){
					return 'image';
				}
				if(/^self\.\w+$/.test(domain)){
					return 'self';
				}
				return 'default';
			};
		}],
	};
});

})();