var app = angular.module('admin', []);
app.controller('banner', function($scope, $http) {
	if (getTel().length == 0) {
		location.href = "login.html";
		return;
	}
	
	$http.get(getHeadUrl() + "banner").success(function(response) {
		$scope.json = response.data;
	});
	
	$scope.deleteRow = function(row) {
		$http.get(getHeadUrl() + "banner_delete?id=" + row.id).success(function(response) {
			window.location.reload();
		});
	}
	
});
