import Immutable from 'immutable'
const initialState = new Immutable.Map()

function route(state = initialState, action) {
    switch (action.type) {
    case 'ADD_ROUTE':
        return state.set(action.route._id, action.route)
    case 'RECEIVE_ROUTES':
        return state.concat(action.routes.map(route => [route._id,route]))
    case 'UPDATE_ROUTE':
        return state.set(action.route._id, action.route)
    default:
        return state
    }
}

export default route