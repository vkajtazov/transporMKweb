'use strict';

/**
 * @ngdoc Simple controller definition that have the $scope and firstService
 *        injected by angular. The $scope is the glue between the controller
 *        and the view that displays the information. The controller is not
 *        aware about the view that displays the information.
 *
 * @name avAngularStartupApp.controller:MainCtrl
 * @description # MainCtrl Controller of the avAngularStartupApp
 */

FirstApp.controller('MainCtrl', ['$scope', 'firstService', '$http',
    function ($scope, firstService, $http) {
        console.log("Main controller");

        /*      getCountries(); // Load all countries with capitals
         function getCountries(){
         $http.get("ajax/getCountries.php").success(function(data){
         $scope.countries = data;
         });
         }*/

        $scope.autocompleteOptions = {
            componentRestrictions: { country: 'mk' },
            types: ['geocode']
        }

    }]);
