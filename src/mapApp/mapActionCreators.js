import {
	convertArrayToMirrorAction,
	createAsyncHttpAction,
} from '../lib/simpleReduxTool';
import createUUID from '../lib/uuidTool';
import {
	trafficDuration
} from '../googleAddressPicker/googleAPIs';

const MapActions = convertArrayToMirrorAction([
	'ADD_ROUTE',
	'DELETE_ROUTE',
	'CLEAR_TRAFFIC_DATA'
]);

// const asyncActions = ['FETCH_DIRECTION_DATA'];

// const MapActions = asyncActions.map(createAsyncHttpAction)
// 	.reduce((acc, cur) => ({
// 		...acc,
// 		...cur
// 	}), syncActions);





// const fetchTrafficData = route => dispatch => {
// 	let {
// 		startAddress,
// 		endAddress
// 	} = route;
// 	let fromPlaceId = startAddress.placeId;
// 	let toPlaceId = endAddress.placeId;
// 	return trafficDuration(fromPlaceId, toPlaceId).then(data => ({
// 			...data,
// 			time: new Date(),
// 			routeId: route.id,
// 			id: createUUID()

// 		})).then(data => dispatch({
// 			type: 'FETCH_DIRECTION_DATA_SUCCESS',
// 			data
// 		}))
// }

// const fetchTraffic = route => {
// 	let { startAddress, endAddress } = route;
// 	let fromPlaceId = startAddress.placeId;
// 	let toPlaceId = endAddress.placeId;
// 	return trafficDuration(fromPlaceId, toPlaceId)
// 		.then(data => ({
// 			...data,
// 			time: new Date(),
// 			routeId: route.id,
// 			id: createUUID()
// 		}));
// }

const clearTrafficData = routeId => ({
	type: MapActions.CLEAR_TRAFFIC_DATA,
	routeId
});

const addRoute = route => ({
	type: MapActions.ADD_ROUTE,
	route: {
		id: createUUID(),
		...route
	}
});
const deleteRoute = routeId => ({
	type: MapActions.DELETE_ROUTE,
	routeId
})

export {
	MapActions,
	addRoute,
	deleteRoute,
	clearTrafficData,
};