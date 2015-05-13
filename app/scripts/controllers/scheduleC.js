FirstApp.controller('scheduleC', [ '$scope', 'scheduleS',
		function($scope, scheduleS) {
		
		$scope.lines = scheduleS.query();

		} ]);
