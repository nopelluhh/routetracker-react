// dependencies submodules import './components/util/util' import
// './components/rtChart/rtChart' import './components/rtWizard/rtWizard' import
// './components/gymList/gymList' import './components/main/main' import
// './components/rtGym/rtGym'

import React, { Component } from 'react'
import Main from 'components/main'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import fetcher from 'services/fetcher'
import mainReducer from 'data/reducers'
import { ConnectedRouter, routerMiddleware} from 'react-router-redux'
const history = createHistory()
const routeMiddleware = routerMiddleware(history)

const store = createStore(
    mainReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(routeMiddleware, thunk.withExtraArgument(fetcher))
    )


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Main/>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App