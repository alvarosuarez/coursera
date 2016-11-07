(function () {
'use strict';

angular.module('data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.html'
  })

  // categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // categories list page
  .state('items', {
    url: '/items/{categoryName}',
    templateUrl: 'src/templates/items.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryName);
      }]
    }
  });;
}

})();
