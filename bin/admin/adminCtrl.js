angular.module('adminApp')
	.controller('adminCtrl', ['$scope', '$state', 'recipeSrv', function($scope, $state, recipeSrv) {
		$scope.main.state = $state.current.name;		
		$scope.admin = {};
		
		$scope.admin.imgs = ['cookbooks_blog.jpg', 'SweetPotatoChips.jpg', 'Adithi_Dinner_blog.jpg', 'Pinterest_Page_featured.png']
		
		$scope.addRecipe = function(isValid, recipe) {
			if (isValid) {
				recipeSrv.addRecipe(recipe);
			}
		};
	}]);