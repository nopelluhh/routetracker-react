export function receiveUser(user) {
    return {
        type: 'RECEIVE_USER',
        payload: user
    }
}

export function getUser() {
    return (dispatch, getState, fetcher) => {
        let state = getState()
        if (state.user._id) {
            return Promise.resolve(state.user)
        } else {
            return fetcher.get('users/current')
                .then(user => {
                    dispatch(receiveUser(user))
                    return user
                })
        }
    }
}