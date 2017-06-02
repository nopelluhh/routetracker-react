import Immutable from 'immutable'
const initialState = new Immutable.Map()

function route(state = initialState, action) {
    switch (action.type) {
    case 'ADD_ROUTE':
        return state.set(action.payload._id, action.payload)
    case 'REMOVE_ROUTES': {
        const routes = new Immutable.Set(action.payload)
        return state.filterNot((v) =>routes.has(v._id))
    }
    case 'RECEIVE_ROUTES':
        return state.concat(action.payload.map(route => [route._id,route]))
    case 'UPDATE_ROUTE':
        return state.set(action.payload._id, action.payload)
    default:
        return state
    }
}

export default route