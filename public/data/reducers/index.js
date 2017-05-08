import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import wizard from './wizard'
import route from './route'
import team from './team'
import gym from './gym'

const mainReducer = combineReducers({
    route: wizard, 
    routes: route,
    team: team,
    gyms: gym,
    router: routerReducer
})

export default mainReducer