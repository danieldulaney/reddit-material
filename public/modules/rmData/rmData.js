(function(){
'use strict';

var rmData = angular.module('rmData', ['ngResource']);

rmData.controller('apiCtrl', ['$scope', '$http', function($scope, $http){
	$scope.apiRes = {status: 'loading'};

	$http({
		method: 'GET',
		url: 'https://api.reddit.com/',
	}).then(function(response){
		$scope.apiRes = response;
	}, function(response){
		$scope.apiRes = response;
	});/**/
}]);

})();