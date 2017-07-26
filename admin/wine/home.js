var app = angular.module("admin", []);
app.controller("home", function($scope, $http, $sce) {
	//没有登录
	//	if (localStorage.getItem('tel') == null) {
	//		location.href = "login.html";
	//		return;
	//	}

	$scope.titleList = [{
		"title": "用户列表",
		"src": "user.html",
		"click": 1,
		"list": []
	}, {
		"title": "商品管理",
		"src": "",
		"click": 0,
		"list": [{
			"title": "新建商品",
			"src": "product_add.html",
			"click": 0
		}, {
			"title": "商品列表",
			"src": "product.html",
			"click": 0
		}]
	}, {
		"title": "订单列表",
		"src": "order.html",
		"click": 0,
		"list": []
	}, {
		"title": "首页banner",
		"src": "banner.html",
		"click": 0,
		"list": []
	}, {
		"title": "优惠券",
		"src": "coupon.html",
		"click": 0,
		"list": []
	}];

	$scope.currentHref = $sce.trustAsResourceUrl($scope.titleList[0].src);

	$scope.choose = function(row) {
		for(var i = 0; i < $scope.titleList.length; i++) {
			$scope.titleList[i].click = 0;
			console.log($scope.titleList[i].list);
			for(var j = 0; j < $scope.titleList[i].list.length; j++) {
				console.log($scope.titleList[i].list[j]);
				$scope.titleList[i].list[j].click = 0;
			}
		}
		row.click = 1;
		$scope.currentHref = $sce.trustAsResourceUrl(row.src);
	}

});