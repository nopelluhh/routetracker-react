import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import wizard from './wizard'
import user from './user'
import route from './route'
import team from './team'
import gym from './gym'

const mainReducer = combineReducers({
    route: wizard, 
    routes: route,
    team: team,
    gyms: gym,
    user,
    router: routerReducer
})

export default mainReducer