import React from 'react'
import PropTypes from 'prop-types'

import {omit} from 'ramda'
import cx from 'classnames'


const Icon = props => (
    <svg viewBox="0 0 8 8" {...omit(['icon', 'color', 'altClass', 'className'], props)} className={cx(props.altClass || 'icon', props.className)}>
      <use xlinkHref={'#' + props.icon} className={props.color || 'icon-black'} />
    </svg>
)

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	color: PropTypes.string,
	altClass: PropTypes.string
}



export default Icon