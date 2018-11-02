/**
 * Contact controller
 */

(function(){
	'usestrict';
	angular.module('webblog').controller('ContactCtrl',ContactCtrl);
	ContactCtrl.$inject=['$http',"$location",'$route'];
	function ContactCtrl($http,$location,$route){
		var contactCtrl = this;
	}
})();