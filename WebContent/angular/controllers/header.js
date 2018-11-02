/**
 * Header Controller
 */

(function(){
	'usestrict';
	angular.module('webblog').controller('HeaderCtrl',HeaderCtrl);
	HeaderCtrl.$inject = ["$http","$location","$route"];
	function HeaderCtrl($http, $location, $route){
		var headerCtrl = this;
	}
})();