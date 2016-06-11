angular.module('foodSenseApp', [
	'ui.router',
	'homeApp',
	'adminApp'
	])
	.constant('VIEW_PATH', {
		HOME: 'bin/home/home.html',
		ADMIN: 'bin/admin/admin.html'
	})
	.config(['$stateProvider', '$urlRouterProvider', 'VIEW_PATH', function($stateProvider, $urlRouterProvider, VIEW_PATH) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: VIEW_PATH.HOME,
				controller: 'homeCtrl'
			})
			.state('admin', {
				url: '/admin',
				templateUrl: VIEW_PATH.ADMIN,
				controller: 'adminCtrl'
			});
	}])
	.run(['recipeSrv', function(recipeSrv) {
		recipeSrv.initRecipes();
	}]);