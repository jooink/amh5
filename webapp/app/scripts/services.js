(function () {
'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '2.1')
  .factory('store', ['$window', function(win) {
  	var localStorage = win.localStorage;
  	var getFromStorage = function() {
    		var retrievedObject = localStorage.getItem('wa.locations');
        	if(retrievedObject)
    			return JSON.parse(retrievedObject);
    		return [];
        	};
     var writeToStorage = function(o) {
     	  localStorage.setItem('wa.locations', JSON.stringify(o));      
     };
    return { 
    	get: getFromStorage,
      put: function(entry) {
  			     var o = getFromStorage();
  			     o.push(entry);
  			     writeToStorage(o);
            },
      drop: function(index) {
 			        var o = getFromStorage();
              //alert(JSON.stringify(o));
              //alert('delteting: ' + index);
 			        var n = o.splice(index,1);
              //alert(JSON.stringify(n));
 			        writeToStorage(o);
            }
        };
    }])
    .factory('geocoder',['$window', function(win) {
	      return function (scb, ecb) {
		        win.navigator.geolocation.getCurrentPosition(scb,ecb,{timeout: 10000, maximumAge: 10000, enableHighAccuracy: false});
	      };
	  }])
    .factory('forecast',['$http', '$window', function($http, win) {
      return function(position) {
        $http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?lat='+position.lat+'&lon=' + position.lng}).
            success(function(data, status, headers, config) {
              // this callback will be called asynchronously
              // when the response is available
              //win.alert(data.main.temp);
              position.temp = data.main.temp;
              position.timestamp = new Date();
              //win.alert(JSON.stringify(data.main));
            }).
            error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              win.alert("Error: " + JSON.stringify(data));
            });
          };
        }
      ]
    );

})();