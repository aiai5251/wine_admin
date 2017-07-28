var app = angular.module('admin', []);
app.controller('banner', function($scope, $http) {
	$http.get(getHeadUrl() + "banner").success(function(response) {
		$scope.json = response.data;
	});
	
	$scope.deleteRow = function(row) {
		$http.get(getHeadUrl() + "banner_delete?id=" + row.id).success(function(response) {
			window.location.reload();
		});
	}
	
});
