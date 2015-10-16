(function(){
'use strict';

var posts = angular.module('Posts', ['App', 'ngMaterial', 'ngResource']);

posts.controller('PostsDataCtrl', ['$resource', function($resource){
	var ctrl = this;

	ctrl.posts = [];

	ctrl.PostResource = $resource('https://api.reddit.com/r/:subreddit',
		{subreddit: '@r'}
	);

	ctrl.PostResource.get({subreddit: 'polandball'}, function(posts){
		ctrl.posts = posts.data.children;
	});
}]); // PostsDataCtrl

posts.directive('rmPost', function(){
	return {
		restrict: 'E',
		templateUrl: '/templates/post.html',
		scope: {
			post: '=post',
		},
	};
});


})(); // Encapsulation