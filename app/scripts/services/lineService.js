/**
 * Created by Kosta on 25-Aug-15.
 */
FirstApp.factory('lineService', function ($resource) {
    return $resource('https://transport-mk.herokuapp.com/data/rest/lines/:action', {}, {
        find: {
            method: 'POST',
            params: {
                'action': 'schedulesByStations'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    })
});