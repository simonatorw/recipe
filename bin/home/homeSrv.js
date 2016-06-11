angular.module('homeApp')
	.factory('homeSrv', ['recipeSrv', function(recipeSrv) {
		function getRecipes() {
			return recipeSrv.getRecipes();
		}
		return {
			getRecipes: getRecipes
		};
	}]);