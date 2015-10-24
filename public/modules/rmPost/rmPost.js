(function(){
'use strict';

var rmPost = angular.module('rmPost', ['rmApp', 'ngMaterial']);

rmPost.directive('rmPost', function(){
	return {
		restrict: 'E',
		templateUrl: 'rmPost.html',
		scope: {
			post: '=post',
		},
	};
});

})();