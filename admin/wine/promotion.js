var app = angular.module('admin', []);
app.controller('promotion', function($scope, $http) {
//	if (getTel().length == 0) {
//		location.href = "login.html";
//		return;
//	}
	
	$http.get(getHeadUrl() + "promotion").success(function(response) {
		$scope.json = response.data;
	});
	
});
