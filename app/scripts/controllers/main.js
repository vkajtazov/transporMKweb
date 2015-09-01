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

FirstApp.controller('MainCtrl', ['$scope', 'stationService', 'lineService',
    function ($scope, stationService, lineService) {

        $scope.stationsFrom = stationService.query();
        $scope.stationsTo = [];
		$scope.busShow = true;
		$scope.trainShow = false;

        $scope.find = function () {
            lineService.find($.param({
                startStationId: $scope.startStation.id,
                endStationId: $scope.endStation.id
            }), function success(result) {
                $scope.line = result;
            });
        };

        $scope.inputFocus = function () {
            console.log("Focused");
            $scope.stationsTo = stationService.findArrivingStations({
                id: $scope.startStation.id
            })
        }
		
		$scope.changeBusStatus = function (){
			$scope.busShow = true;
		}
		
		$scope.changeTrainStatus = function (){
			$scope.trainShow = true;
		}

    }]);
