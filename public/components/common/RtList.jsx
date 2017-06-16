import React from 'react'
import PropTypes from 'prop-types'


const RtList = props => (
    <div className="info_pod__list">
        { props.listItems.map((item, index) => (<div key={item._id || index} className="">{item.value || item}</div>)) }
    </div>
)

export default RtList

RtList.propTypes = {
	listItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
}
