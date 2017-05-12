const initialState = []

const transformGyms = (gyms) => {
    gyms.forEach(gym => {
        gym.value = gym.name
    })
    return gyms
}

const gym = (state = initialState, action) => {
    switch (action.type) {
    case 'RECEIVE_GYMS':
        return transformGyms(action.payload)
    case 'GET_GYMS':
        return state
    default:
        return state
    }
}

export default gym  