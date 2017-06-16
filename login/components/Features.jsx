import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Block from './Block'
import HeaderText from './HeaderText'

import {clamp, translate} from 'loginutil'

class Features extends Component {
    static propTypes = {
        scroll: PropTypes.number,
        top: PropTypes.number
    }

    render() {
        const pinned = this.props.scroll < 0
        const offset = -this.props.top

        const headerStyle = {
            top: pinned? '5vh': `calc(${offset}px + 5vh)`,
            position: pinned? 'fixed':'relative',
            transform:'none',
            zIndex: 300
        }

        const laptopStyle = {
            transform: `rotate(${clamp(offset / 12 + 10, -Infinity, 10)}deg)`,
            left: translate(-100, 100, -15, 15, true)(-this.props.scroll)  + 'vw',
            position: 'absolute',
            height: 'calc(100px + 15vw)',
            minHeight: '200px',
            top: 'calc(40% - 10vw)'
        }

        const phoneStyle = {
            transform: `rotate(${clamp(-offset / 5 + 20, 19, Infinity)}deg)`,
            right: translate(-100, 100, -5, 22, true)(-this.props.scroll)  + 'vw',
            position: 'absolute',
            height: 'calc(350px + 8vw)',
            top: '-3vw'         
        }

        const letterStyle = {
            position: 'relative',
            letterSpacing: clamp(translate(-100, 100, 1.02, -1)(-this.props.scroll), 0, Infinity) + 'em',
            opacity: 1 + translate(-100, 100, 2, -2)(-this.props.scroll)
        }

        return (
            <Block className="features" style={{overflow: 'hidden'}}>
                <HeaderText ref={(el) => this.header = el} style={headerStyle}/>
                <section className="features__content">
                    <div className="drop-shadow-1">
                        <img className="hidden-sm-down" style={phoneStyle} src="/assets/login/assets/phone.png"/>
                    </div>
                    <div className="drop-shadow-1">
                        <img className="hidden-sm-down" style={laptopStyle} src="/assets/login/assets/laptop.png"/>
                    </div>
                    <span className="headline">Add routes from your computer, your phone, your iPad, <del>your spaceship</del>.</span>
                </section>
                <section className="features-two">
                    <h3 className="center-block text-center" style={letterStyle}>Print tags, visualize distribution, get paid.</h3>
                </section>
            </Block>
        )
    }
}

export default Features