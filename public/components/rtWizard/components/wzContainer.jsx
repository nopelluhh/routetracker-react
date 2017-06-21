import React from 'react'
import PropTypes from 'prop-types'

const WzContainer = props => (
    <div className="wz-big-container">
      <div className="left-wing"></div>
      <div className="wz-container">
        <div className="wz-inner" style={{transform: `translateX(${(props.step) * -16.6}%)`}}>
          { props.children }
        </div>
      </div>
      < div className="right-wing"> </div>
    </div>
)

WzContainer.propTypes = {
	step: PropTypes.number
}

export default WzContainer