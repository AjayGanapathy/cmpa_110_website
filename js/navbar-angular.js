angular.module('navBarModule',[])
//
// navBarModule.directive(navElementDirectives);
// var navElementDirectives = {};
// navElementDirectives.btnSingle = function('attr_name', function;
// navElementDirectives.input = function($scope){};
// navElementDirectives.text = function($scope){};
// navElementDirectives.dropdown = function($scope){};
// navElementDirectives.btnGroup = {};
// navElementDirectives.btnGroup.radio = function($scope){};
// navElementDirectives.btnGroup.checklist = function($scope){};
	.directive('navBarElement',function(){
		function link(scope, element, attr){
			//your code goes here
		}
		return{link: link};
	})
	.controller('ctrl_name',function($scope){
		//scope manipulation goes here
	});

