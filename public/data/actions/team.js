import {receiveGyms} from './gym'
export const RECEIVE_TEAM = 'RECEIVE_TEAM'

export function receiveTeam(team) {
    return {
        type: RECEIVE_TEAM,
        team
    }
}

export function getTeam() {
    return (dispatch, getState, fetcher) => {
        let state = getState()
        if (state.team.gyms) {
            return Promise.resolve(state)
        } else {
            return fetcher.get('teams/current')
                .then(team => {
                    dispatch(receiveTeam(team))
                    dispatch(receiveGyms(team.gyms))
                    return team
                })
        }
    }
}