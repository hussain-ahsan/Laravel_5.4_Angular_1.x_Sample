/*
 Angular routes See all users
 */
app.config(function($routeProvider){
    /*
     route for Home
     */
    $routeProvider.when('/',{
        templateUrl:'templates/home/home.html',
        controller: 'HomeController'
    }).otherwise({ redirectTo: 'templates/404.html' });
    /*
     route for Home
     */
    $routeProvider.when('/test',{
        templateUrl:'templates/home/home.html',
        controller: 'TestController'
    }).otherwise({ redirectTo: 'templates/404.html' });

});