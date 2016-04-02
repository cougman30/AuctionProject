namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/about.html',
                controller: MyApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('items', {
                url: '/items',
                templateUrl: '/ngApp/items.html',
                controller: MyApp.Controllers.ItemsController,
                controllerAs: 'controller'
            })
            .state('details', {
                url: '/items/:id',
                templateUrl: '/ngApp/details.html',
                controller: MyApp.Controllers.DetailsController,
                controllerAs: 'controller'
            })
            .state('createItem', {
                url: '/createItem',
                templateUrl: '/ngApp/createItem.html',
                controller: MyApp.Controllers.ItemCreateController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

}