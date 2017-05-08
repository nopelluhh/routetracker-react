export function receiveGyms(gyms) {
    return {
        type: 'RECEIVE_GYMS',
        gyms
    }
}

export function getGyms(team) {
    return (dispatch, getState, fetcher) =>{
        return fetcher.get('gyms/team/'+team._id).then(gyms => {
            dispatch(receiveGyms(gyms))
            return gyms
        })
    }
}