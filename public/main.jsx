import './styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { AppContainer } from 'react-hot-loader'


const render = Component => {
    console.log('rendered')
    ReactDOM.render(
    <AppContainer>
		<Component />
	</AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
    console.log('so so hot')
    module.hot.accept('./app', () => { 
        const App = require('./app').default
        render(App)
    })
}