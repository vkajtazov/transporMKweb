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
		$scope.trainShow = true;
		
		$scope.search = function(){
			if($scope.busShow && $scope.trainShow){
				find();
			}
			else if($scope.busShow && !$scope.trainShow){
				findBusSchedules();
			}
			else if(!$scope.busShow && $scope.trainShow){
				findTrainSchedules();
			}
			else {
				$scope.line = {};
			}
		}

        var find = function () {
            lineService.find($.param({
                startStationId: $scope.startStation.id,
                endStationId: $scope.endStation.id
            }), function success(result) {
                $scope.line = result;
            });
        };
		
		var findBusSchedules = function () {
			 lineService.findBusSchedules($.param({
                startStationId: $scope.startStation.id,
                endStationId: $scope.endStation.id
            }), function success(result) {
                $scope.line = result;
            });
		}
		
		var findTrainSchedules = function () {
			 lineService.findTrainSchedules($.param({
                startStationId: $scope.startStation.id,
                endStationId: $scope.endStation.id
            }), function success(result) {
                $scope.line = result;
            });
		}

        $scope.inputFocus = function () {
            console.log("Focused");
            $scope.stationsTo = stationService.findArrivingStations({
                id: $scope.startStation.id
            })
        }
		
		$scope.changeBusStatus = function (){
			$scope.busShow = !$scope.busShow;
			$scope.search ();
		}
		
		$scope.changeTrainStatus = function (){
			$scope.trainShow = !$scope.trainShow;
			$scope.search ();
		}
		
		$scope.getTime = function (vreme) {
			        var currTime = new Date();
                    var lineTime = new Date(new Date().setHours(vreme[0] + vreme[1], vreme[3] + vreme[4]));
                    return (currTime <= lineTime);
		}

    }]);
