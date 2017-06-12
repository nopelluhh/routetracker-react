import React from 'react'
import PropTypes from 'prop-types'

import { renderIf } from 'rtutil'


const RtCard = (props) => (
  <div className="rt-card__content" style={props.style}>
    {renderIf(props.title)(
       <div className="rt-card__header text-capitalize">
         {props.title}
       </div>)}
    {props.children}
  </div>
)


export default RtCard

RtCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}