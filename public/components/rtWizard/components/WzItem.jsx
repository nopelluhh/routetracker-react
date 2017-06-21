import React from 'react'
import PropTypes from 'prop-types'
import color from 'services/colorService'
import cx from 'classnames'

const WzItem = props => {
	function onClick() {
		props.update(props.type, props.item)
	}

	const itemStyle = {
		backgroundColor: props.item.color ? props.item.color : 'white',
		color: props.item.color ? color.textColor(props.item.color) : 'inherit'
	}

	return (
		<div onClick={onClick} className={cx('wz-dot', {'item-selected': props.selected})} style={itemStyle}>
            <div className="wz-label grid-label" onClick={onClick}>
                {props.item.value}
            </div>
        </div>
	)

}

WzItem.propTypes = {
	update: PropTypes.func,
	item: PropTypes.object,
	type: PropTypes.string,
	selected: PropTypes.bool
}

export default WzItem
