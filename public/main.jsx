import './styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { AppContainer } from 'react-hot-loader'
import SvgInjector from 'svg-injector'

const render = Component => {
    ReactDOM.render(
    <AppContainer>
		<Component />
	</AppContainer>,
    document.getElementById('root')
  )
}

render(App)

document.addEventListener('DOMContentLoaded', function() {
    let icons = document.querySelectorAll('.iconic-sprite')
    SvgInjector(icons)
})

if (module.hot) {
    console.log('so so hot')
    module.hot.accept('./app', () => { 
        const App = require('./app').default
        render(App)
    })
}