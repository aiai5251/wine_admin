var app = angular.module('admin', []);
app.controller('promotion_modify', function($scope, $http) {
	if (getTel().length == 0) {
		location.href = "login.html";
		return;
	}
	
	$scope.promotionId = GetQueryString("id");

	$http.get(getHeadUrl() + "promotion?id=" +$scope.promotionId).success(function(response) {
		$scope.row = response.data;
	});
	
	$scope.modify = function() {
		var formdata = new FormData(document.getElementById("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "promotion_modify",
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