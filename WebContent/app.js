/*angular.module('Authentication', []);
var webblog = angular.module('webblog',['ngRoute']);
webblog.config(['$routeProvider',
		function($routeProvider){
			const url = "angular/views"
			$routeProvider
				.when("/",{
					
				})
				.when("/login",{
					templateurl: "angular/views/login.html",
					controller: "LoginCtrl",
					controllerAs: "loginCtrl"
				})
				.when("/contact",{
					templateurl : "angular/views/contact.html",
					controller : "ContactCtrl",
					controllerAs : "contactCtrl"
				})
				.when("/header",{
					templateurl : "/angular/views/header.html",
					controller : "HeaderCtrl",
					controllerAs : "headerCtrl"
				})
				.otherwise({redirectTo: '/header'
				});
}]);
		}).run(function($rootScope,$cookieStore,$location,$http,$window,$route,$timeout){
			 $rootScope.$on('$locationChangeStart', function (event, next, current) {
				 $location.path('/header');
			 });
		});
*/



var app = angular.module("foodweb", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "angular/views/login.html"
    })
    .when("/contact", {
        templateUrl : "angular/views/contact.html"
    })
    .when("/header", {
        templateUrl : "angular/views/header.html"
    })
    .when("/login", {
        templateUrl : "angular/views/login.html"
    });
});