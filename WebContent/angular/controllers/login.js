/**
 * Login Controller
 */

(function(){
	'usestrict';
	angular.module('webblog').controller('LoginCtrl',LoginCtrl);
	LoginCtrl.$inject = ["$http","$location","$route"];
	function LoginCtrl($http, $location, $route){
		var loginCtrl = this;
	}
})();