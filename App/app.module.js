
var app = angular.module('myApp', ['ngRoute','ui.bootstrap','angularTrix']);
app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'app/components/login/login.html'
		})
		.when('/register',{
			templateUrl: 'app/components/register/register.html'
		})
		.when('/admin',{
			controller:'sidebarController',
			templateUrl:'app/components/admin/admin.html'
		})
		.otherwise({
			redirectTo:'/'
		})
});
