var app = angular.module('admin', []);
app.controller('banner_modify', function($scope, $http) {
	if (getTel().length == 0) {
		location.href = "login.html";
		return;
	}
	
	$scope.bannerId = GetQueryString("id");
	
	$http.get(getHeadUrl() + "banner_detail?id=" +$scope.bannerId).success(function(response) {
		$scope.row = response.data;
	});
	
	$scope.modify = function() {
		var formdata = new FormData(document.getElementById("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "banner_modify",
			data: formdata,
			headers: {
				'Content-Type': undefined
			},
			transformRequest: angular.identity
		}).success(function(response) {
			$scope.json = response.data;
		});
	}
});