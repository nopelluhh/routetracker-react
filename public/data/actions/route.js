export function addRoute(route) {
    return {
        type: 'ADD_ROUTE',
        route
    }
}

export function receiveRoutes(routes) {
    return {
        type: 'RECEIVE_ROUTES',
        routes
    }
}

export function updateRoute(route) {
    return {
        type: 'UPDATE_ROUTE',
        route
    }
}

export function getRoutesByGym(id) {
    return (dispatch, getState, fetcher) => {
        return fetcher.get('route/boulder/gym', {
            gym: id
        }).then(routes => {
            dispatch(receiveRoutes(routes))
            //return routes
        })
    }
}

export function postRoute(route) {
    return (dispatch, getState, fetcher) => {
        return fetcher.create('route', route)
            .then(res => {
                dispatch(addRoute(res))
                return res
            })
    }
}

export function putRoute(route) {
    return (dispatch, getState, fetcher) => {
        return fetcher.update(`route/${route._id}`, route)
            .then(res => {
                dispatch(updateRoute(res))
                return res
            })
    }
}