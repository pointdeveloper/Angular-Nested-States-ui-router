var myApp =angular.module("appModuleName",['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){
$stateProvider
        .state('settings', {
            url: '/settings',
            abstract:true,
            templateUrl: 'templates/settings.html'
        })
        .state('settings.profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html'
        })
        .state('settings.account', {
            url: '/account',
            templateUrl: 'templates/account.html'
        });

    $urlRouterProvider.otherwise('/settings/profile');
});
