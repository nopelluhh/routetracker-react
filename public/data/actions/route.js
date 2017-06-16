export function addRoute(route) {
	return {
		type: 'ADD_ROUTE',
		payload: route
	}
}

export function receiveRoutes(routes) {
	return {
		type: 'RECEIVE_ROUTES',
		payload: routes
	}
}

export function updateRoute(route) {
	return {
		type: 'UPDATE_ROUTE',
		payload: route
	}
}

export function removeRoutes(arr) {
	return {
		type: 'REMOVE_ROUTES',
		payload: arr
	}
}

export function getRoutesByGym(id) {
	return (dispatch, getState, fetcher) => fetcher.get(`route/gym/${id}`, {
		gym: id
	}).then(routes => {
		dispatch(receiveRoutes(routes))
            //return routes
	})
}

export function postRoute(route) {
	return (dispatch, getState, fetcher) => fetcher.create('route', route)
            .then(res => {
	dispatch(addRoute(res))
	return res
})
}

export function putRoute(route) {
	return (dispatch, getState, fetcher) => fetcher.update(`route/${route._id}`, route)
            .then(res => {
	dispatch(updateRoute(res))
	return res
})
}