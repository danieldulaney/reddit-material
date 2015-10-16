(function(){
'use strict';

var posts = angular.module('Posts', ['App', 'ngMaterial', 'ngResource']);

posts.controller('PostsDataCtrl', ['$resource', function($resource){
	var ctrl = this;

	ctrl.posts = {posts: 'yup'};

	ctrl.PostResource = $resource('https://api.reddit.com/r/:subreddit',
		{subreddit: '@r'}
	);

	ctrl.PostResource.get({subreddit: 'funny'}, function(posts){
		ctrl.posts = posts;
	});
}]);
})();