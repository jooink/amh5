(function () {
'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('appAlbe', ['albe', function(albe) {
    return function(scope, elm, attrs) {
      elm.text(albe);
    };
  }]);


})();