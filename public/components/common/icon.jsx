import React from 'react'
import {omit} from 'ramda'
import cx from 'classnames'


const Icon = (props) => (
    <svg viewBox="0 0 8 8" {...omit(['icon', 'color', 'altClass', 'className'], props)} className={cx(props.altClass || 'icon', props.className)}>
      <use xlinkHref={'#' + props.icon} className={props.color || 'icon-black'} />
    </svg>
)



export default Icon