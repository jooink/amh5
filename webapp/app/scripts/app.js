(function () {
'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngTouch',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/show', {templateUrl: 'partials/show.html', controller: 'ShowCtrl'});
  $routeProvider.when('/add', {templateUrl: 'partials/add.html', controller: 'AddCtrl'});
  $routeProvider.otherwise({redirectTo: '/show'});
}]);

})();