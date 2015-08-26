/**
 * Created by Kosta on 25-Aug-15.
 */
FirstApp.factory('stationService', function ($resource) {
    return $resource('https://transport-mk.herokuapp.com/data/rest/stations/:action/:id', {}, {
        findArrivingStations: {
            method: 'GET',
            isArray: true,
            params: {
                'action': 'arriving'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    })
});