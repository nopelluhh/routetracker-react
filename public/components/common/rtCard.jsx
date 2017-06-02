import React from 'react'
import PropTypes from 'prop-types'


const RtCard = (props) => (
  <div className="rt-card__content">
    <div className="rt-card__header text-capitalize">
      { props.title }
    </div>
    { props.children }
  </div>
)

export default RtCard

RtCard.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}