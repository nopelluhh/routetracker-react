import React from 'react'
import PropTypes from 'prop-types'
import color from 'services/colorService'

const WzItem = (props) => {
    function _click() {
        props.update(props.type,props.item)
    }
    return (
    <div onClick={_click} className={setClass(props)} style={{backgroundColor: props.item.color? props.item.color : 'white', color: props.item.color? color.textColor(props.item.color) : 'inherit'}}>
        <div className="wz-label grid-label" onClick={_click}>{props.item.value}</div>
    </div>
    )

}

WzItem.propTypes = {
    update: PropTypes.func,
    item: PropTypes.object,
    type: PropTypes.string
}

function setClass(props) {
    return 'wz-dot ' + (props.selected? 'item-selected' : '')
}

export default WzItem
            