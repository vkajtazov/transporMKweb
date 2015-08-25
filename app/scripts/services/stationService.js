/**
 * Created by Kosta on 25-Aug-15.
 */
FirstApp.factory('stationService', function ($resource) {
    return $resource('http://transport-mk.herokuapp.com/data/rest/stations/:action', {}, {
        find: {
            method: 'POST',
            isArray: true,
            params: {
                'action': 'schedulesByStations'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    })
});