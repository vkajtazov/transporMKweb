/**
 * Created by Kosta on 25-Aug-15.
 */
FirstApp.factory('lineService', function ($resource) {
    return $resource('https://transport-mk.herokuapp.com/data/rest/lines/:action/:typeDef/:type', {}, {
        find: {
            method: 'POST',
            params: {
				'action':'schedulesByStations',
                'typeDef':'',
				'type': ''
				
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },
		findBusSchedules: {
            method: 'POST',
            params: {
                'action':'schedulesByStations',
                'typeDef':'type',
				'type': 'BUS'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },
		findTrainSchedules: {
            method: 'POST',
            params: {
                'action':'schedulesByStations',
                'typeDef':'type',
				'type': 'TRAIN'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    })
});