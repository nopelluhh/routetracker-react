import React from 'react'
import PropTypes from 'prop-types'
import WzPage from './wzPage'
import {RtCard} from 'components/common/'

const WzStep = props => (
	props.review? (
    <div className="wz-item">
      <div className="h3"></div>
      <RtCard title={props.name}>{props.children}</RtCard>
    </div>
    ) : (
    <div className="wz-item">
      <div className="text-center h3 text-capitalize">
        { props.name }:</div>
      <WzPage next={props.next} prev={props.prev}/>
      { props.children }
    </div>
    )
)

WzStep.propTypes = {
	review: PropTypes.bool,
	name: PropTypes.string,
	children: PropTypes.node,
	next: PropTypes.func,
	prev: PropTypes.func
}

export default WzStep