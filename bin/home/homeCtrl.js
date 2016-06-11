angular.module('homeApp')
	.controller('homeCtrl', ['$scope', 'homeSrv', '$state', function($scope, homeSrv, $state) {
		$scope.main.state = $state.current.name;
		$scope.home = {
			selected: 0
		};
		
		homeSrv.getRecipes().then(function(data) {
			$scope.home.recipes = data;
		});
	}]);