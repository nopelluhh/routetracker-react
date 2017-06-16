import React from 'react'

import Header from './components/Header'
import Features from './components/Features'
import Contact from './components/Contact'
import Login from './components/Login'

import { Track, TrackDocument } from 'react-track'

import {top, height, blockScroll} from 'loginutil'

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
        <Track component={Features} formulas={[blockScroll, top, height]}>
          {(FeaturesTracked, percent, top, height) => 
          <FeaturesTracked scroll={percent} top={top} height={height}/>
          }
        </Track>
        <Track component={Contact} formulas={[blockScroll, top, height]}>
          {(ContactTracked, percent, top, height) => 
          <ContactTracked scroll={percent} top={top} height={height}/>
          }
        </Track>
        <Login isOpen={this.state.loginOpen} toggle={this.toggleLogin}/>
      </div>
      )}
    </TrackDocument>

    toggleLogin = () => {
        this.setState({loginOpen: !this.state.loginOpen})
    }
}


export default App