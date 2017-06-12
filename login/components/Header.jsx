import React from 'react'
import PropTypes from 'prop-types'
import Block from './block'

function byPercent(min, max, per) {
    if (arguments.length === 2) {
        per = max
        max = min
        min = 0
    }

    return min + (max - min) * (per / 100)
}

class Header extends React.Component {
    static propTypes = {
        toggleLogin: PropTypes.func,
        scroll: PropTypes.number.isRequired,
        height: PropTypes.number
    }

    render = () => {
        const {height} = this.props
        const offset = byPercent(height / 4, height - 60, -this.props.scroll)
        const shouldPin = this.header && this.header.getBoundingClientRect().top <= 30
        const pinTo = '30px'
        return (
            <Block>
              <div className="header" style={{zIndex: 20}}>
                <h1 className="header-text" ref={(el) => this.header = el} style={{top: offset + 'px'}}>ROUTETRACKER</h1>
                <div className="header__login" onClick={this.props.toggleLogin}>LOGIN</div>
              </div>
              <div className="header-two">
                <h1 className="header-text" style={{ 
                    top: shouldPin ? pinTo : (-height / 2) + offset + 'px', 
                    position: shouldPin ? 'fixed' : 'relative', 
                    transform: shouldPin? 'none' : 'translate(0, -50%)'
                }}>ROUTETRACKER</h1>
                <div className="header-two__content">
                  <span>Simple route management, designed for the whole team.</span>
                </div>
              </div>
            </Block>
        )
    }
}


export default Header