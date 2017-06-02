import React from 'react'
import PropTypes from 'prop-types'


const RtCard = (props) => (
  <div className={'rt-pane ' + (props.className || '')}>
    { props.children }
  </div>
)

export default RtCard

RtCard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}