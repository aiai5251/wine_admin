var app = angular.module('admin', []);
app.controller('coupon_modify', function($scope, $http) {
	$scope.couponId = GetQueryString("id");
	
	$http.get(getHeadUrl() + "coupon?id=" +$scope.couponId).success(function(response) {
		$scope.coupon = response.data;
	});
	
	$scope.modify = function() {
		var formdata = new FormData(document.getElementById("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "coupon_modify",
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