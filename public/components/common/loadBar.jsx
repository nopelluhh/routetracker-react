import React from 'react'
import PropTypes from 'prop-types'

const LoadBar = props => (
    <div className={props.inline? 'load-bar load-bar-inline' : 'load-bar'}>
        <div className="load-bar__bar"></div>
        <div className="load-bar__bar"></div>
        <div className="load-bar__bar"></div>
    </div>
)

LoadBar.propTypes = {
	inline: PropTypes.bool
}

export default LoadBar