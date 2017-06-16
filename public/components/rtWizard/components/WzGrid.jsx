import React from 'react'
import PropTypes from 'prop-types'
import WzListItem from './wzListItem'
import WzItem from './wzItem'

const WzGrid = props => {
	const El = props.list ? WzListItem : WzItem

	const isSelected = item => {
		if(props.selector === 'tags') return props.route.tags.indexOf(item.value) > -1
		return  props.route[props.selector] === item 
	}

	return (<div className="wz-grid">
              { props.items.map(item => (
                    <El key={ item._id || item} item={ item } type={ props.selector } update={ props.update } selected={isSelected(item)} />
                )) }
            </div>
	)
}

WzGrid.propTypes = {
	items: PropTypes.array,
	selector: PropTypes.string,
	route: PropTypes.object,
	list: PropTypes.oneOf([undefined, true]),
	tags: PropTypes.oneOf([undefined, true]),
	color: PropTypes.string,
	update: PropTypes.func
}

export default WzGrid