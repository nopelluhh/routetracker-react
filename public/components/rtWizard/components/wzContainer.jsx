import React from 'react'

const WzContainer = (props) => (
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

export default WzContainer