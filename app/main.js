angular.module('mitx',[])
.factory('Startups', function($http) {
	var result = {};
	var url =  'startups.json';
	
	result.getStartups = function() {
		return $http.get(url);
	};

	return result;
})
.controller('MainCtrl', function($scope,Startups) {
	Startups.getStartups().then(function(result) {
		$scope.startups = result.data;
	});
})