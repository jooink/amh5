
(function () {
'use strict';

/* Filters */

angular.module('myApp.filters', [])
  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .filter('convert',function() {
  	return function(val) {
  		return val ? val + "K" : "ND";
  	};
  })
  .filter('convertTimestamp',function() {
    return function(val) {
      return val ? val : "never";
    };
  }
);

})();