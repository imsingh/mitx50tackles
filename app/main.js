angular.module('mitx',['ui.bootstrap'])
.factory('Startups', function($http) {
	var result = {};
	var url =  'startups.json';
	
	result.getStartups = function() {
		return $http.get(url);
	};

	return result;
})
.controller('MainCtrl', function($scope,$modal,Startups) {
	Startups.getStartups().then(function(result) {
		$scope.startups = result.data;
	});

	$scope.openStartup = function($index) {
		var modalInstance = $modal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'templates/modal.html',
	      controller: 'ModalCtrl',
	      size: 'lg',
	      resolve : {
	      	startup : function() {
	      		return $scope.startups[$index];
	      	}
	      }
    	});
	};
})
.controller('ModalCtrl', function($scope, $modalInstance, startup) {
	$scope.startup = startup;

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}
})	