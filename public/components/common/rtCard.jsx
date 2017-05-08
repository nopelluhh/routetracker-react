import React from 'react'
import PropTypes from 'prop-types'


const RtCard = (props) => (
    <div>
      <div className="bs-1 rt_card__header text-capitalize">
        {props.title}
      </div>
      <div className="rt_card__content">
        { props.children }
      </div>
    </div>
)

export default RtCard

RtCard.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}