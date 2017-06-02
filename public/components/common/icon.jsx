import React from 'react'


const Icon = (props) => (
    <svg viewBox="0 0 8 8" onClick={props.onClick} className={props.altClass || 'icon'}>
      <use xlinkHref={'#' + props.icon} className={props.color || 'icon-black'} />
    </svg>
)

export default Icon