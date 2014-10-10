(function () {

'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ShowCtrl', ['$scope','store', 'forecast', function($scope,store, forecast) {
  	$scope.locations = store.get();
  	
  	//ne aggiunge uno per provare
  	//store.put( {name: 'rand'} );

  	$scope.deleteItem = function(i) { store.drop(i); $scope.locations = store.get(); } ;
    $scope.refresh = forecast;

  }])
  .controller('AddCtrl', ['$scope','$location', 'geocoder', 'store', '$window', 'forecast', function($scope, $location, geocoder, store, win, forecast) {
  		$scope.location = { "name" : "" , "lat": 0, "lng": 0 };

  		
      $scope.geocode = function	() { 
  			geocoder(function(p) { 
  				$scope.location.lat = p.coords.latitude; 
  				$scope.location.lng = p.coords.longitude;
          $scope.$apply();
  		}, function(e) { win.alert("ERROR " +  JSON.stringify(e));}); };


      $scope.save =   function(e) { store.put(e) ; $location.path('/show') };

      $scope.forecast = forecast;


  }]);

})();