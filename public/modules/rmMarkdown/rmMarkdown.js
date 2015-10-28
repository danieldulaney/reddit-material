(function(){
	'use strict';

	var rmMarkdown = angular.module('rmMarkdown', ['ngSanitize']);

	rmMarkdown.directive('rmMarkdown', [function(){
		return {
			restrict: 'E',
			scope: {
				content: '=',
			},
			controller: ['$scope', '$sce', function($scope, $sce){
				$scope.parse = function(string){

					// Begin by sanitizing string (remove any existing HTML)
					var escMap = {
						'<': '&lt;',
						'>': '&gt',
						'"': '&quot',
						'\'': '&#39;',
						'/': '&#x2F;',
						'\\*': '&#042;',
						'\\_': '&#095;',
						'\\~': '&#126;',
						'\\^': '&#094;',
						'\\|': '&#124;',
						'\\:': '&#058;',
						'\\=': '&#061;',
						'\\-': '&#045;',
					};

					// Sanitize string and handle escape characters
					string = string.replace(/[<>"'/]|\\\*|\\_|\\~|\\^|\\\||\\:|\\=|\\-/g, function(match){return escMap[match];});


					// Raw links (http://whatever)
					string = string.replace(/http:\/\/[\w\.]+/ig, function(match){
						return '<a href="' + match + '">' + match + '</a>';
					});

					// Raw links (www.whatever)
					string = string.replace(/www\.[\w\.]+/ig, function(match){
						return '<a href="http://' + match + '">' + match + '</a>';
					});

					// Formatted links [whatever](whatever.com)
					string = string.replace(/\[.*\]\s*(http.*)/ig, function(match){
						return 'flink';
					});

					// Horizontal lines

					return $sce.trustAs('html', string);
				};
			}],
			template: '<div style="overflow:wrap" ng-bind-html="parse(content)"></div>',
		};
	}]);
})();