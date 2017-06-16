import React from 'react'
import PropTypes from 'prop-types'

const WzListItem = props => {
	function _click() {
		props.update(props.type, props.item)
	}
	return (
		<div className={setClass(props)}>
			<div className="wz-label list-label" onClick={_click}>{props.item.value}</div>
		</div>
	)
}

function setClass(props) {
	return 'wz-list-item ' + (props.selected? 'item-selected' : '')
}

WzListItem.propTypes = {
	selected: PropTypes.bool,
	update: PropTypes.func,
	item: PropTypes.object,
	type: PropTypes.string
}

export default WzListItem
            