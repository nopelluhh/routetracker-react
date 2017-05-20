const initialState = {}

const user = (state = initialState, action) => {
    switch (action.type) {
    case 'RECEIVE_USER':
        return action.payload
    case 'GET_USER':
        return state
    default:
        return state
    }
}

export default user  