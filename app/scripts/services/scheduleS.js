var contextPath = "/transportMK/data/rest";

FirstApp.factory('scheduleS', ['$resource', function ($resource) {
	

	return $resource(contextPath + '/getData/cityBus', {}, {});
} ]);