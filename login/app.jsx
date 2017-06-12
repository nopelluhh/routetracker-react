import React from 'react'
import Header from './components/Header'
import Block from './components/Block'
import Login from './components/Login'
import { Track, TrackDocument } from 'react-track'

const top = (rect, el) => {
    return rect.top + el.clientHeight
}

const blockScroll = ({top}) => {
    const val = ((top / document.documentElement.clientHeight) * 100)
    return Math.max(-100, Math.min(100, val))
}

const height = (_, el) => el.clientHeight

class App extends React.Component {
    state = {
        loginOpen: false
    }

    render = () => 
    <TrackDocument formulas={[]} updateOnDidMount>
      {() => (
      <div>
        <Track component={Header} formulas={[blockScroll, top, height]}>
          {(HeaderTracked, percent, top, height) => 
          <HeaderTracked scroll={percent} top={top} height={height} toggleLogin={this.toggleLogin}/>
          }
        </Track>
        <Block style={{backgroundColor: '#ffe205'}}/>
        <Block style={{backgroundColor: '#12b0ff'}}/>
        <Block style={{backgroundColor: 'black'}}/>
        <Login isOpen={this.state.loginOpen}/>
      </div>
      )}
    </TrackDocument>

    toggleLogin = () => {
        this.setState({loginOpen: !this.state.loginOpen})
    }
}


export default App