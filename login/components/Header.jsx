import React from 'react'
import PropTypes from 'prop-types'

import Block from './Block'
import HeaderText from './HeaderText'

import { translate } from 'loginutil'

class Header extends React.Component {
	static propTypes = {
		toggleLogin: PropTypes.func,
		scroll: PropTypes.number.isRequired,
		height: PropTypes.number
	}

	render = () => {
		const {height} = this.props

		const clientHeight = document.documentElement.clientHeight
		const offset = translate(0, 100, height / 4, height - 60)(-this.props.scroll)
		const pinned = this.header && this.header.getBoundingClientRect().top <= clientHeight / 20

		const headerStyle = {
			top: pinned ? `calc(${-this.props.top}px + 5vh` : offset + 'px',
			transform: pinned ? 'none' : 'translate(0, -50%)',
			zIndex: 300
		}

		const headerSecondStyle = {
			top: pinned ? '5vh' : (-height / 2) + offset + 'px',
			position: pinned ? 'fixed' : 'relative',
			transform: pinned ? 'none' : 'translate(0, -50%)'
		}

		return (
			<Block>
                <div className="header" style={{ zIndex: 20 }}>
                    <HeaderText refTo={el => this.header = el} style={headerStyle} />
                    <div className="header__login" onClick={this.props.toggleLogin}>
                        LOGIN
                    </div>
                </div>
                <div className="header-two">
                    <HeaderText style={headerSecondStyle} />
                    <div className="header-two__content">
                        <span>Simple route management, designed for the whole team.</span>
                    </div>
                </div>
            </Block>
		)
	}
}


export default Header