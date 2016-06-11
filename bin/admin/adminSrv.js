angular.module('adminApp')
	.factory('recipeSrv', ['$http', 'DATA_PATH', '$filter', '$state', function($http, DATA_PATH, $filter, $state) {
		var recipes = [];
		
		function initRecipes() {
			if (localStorage.fs_recipes) {
				recipes = angular.fromJson(localStorage.fs_recipes);
			}
		}
		function getRecipes() {
			return $http.get(DATA_PATH.RECIPES, { cache: true }).then(function(response) {
				var initialList = response.data.recipes;

				return initialList.concat(recipes);
			});
		}
		function getDate() {
			var d = new Date();
			return $filter('date')(d, 'longDate');
		}
		function addRecipe(recipe) {
			recipes.push({
				title: recipe.recipeTitle,
				image: recipe.recipeImg,
				summary: recipe.recipeDescription,
				date: getDate()
			});
			localStorage.fs_recipes = angular.toJson(recipes);
			$state.go('home');
		}
		return {
			getRecipes: getRecipes,
			initRecipes: initRecipes,
			addRecipe: addRecipe
		};
	}]);