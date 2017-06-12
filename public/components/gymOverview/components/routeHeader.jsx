import React from 'react'
import PropTypes from 'prop-types'
import {renderIf} from 'rtutil'

const arrows = { 
    'asc': '\u25B2',
    'desc': '\u25BC'
}


const RouteHeader = (props) => {
    function arrow(param) {
        return props.sort === param? arrows[props.dir] : null
    } 

    return (
      <thead>
        <tr className="table-center">
          <th onClick={props.handleSort('set_on')}>Date {arrow('set_on')}</th>
          <th onClick={props.handleSort('grade')}>Grade {arrow('grade')}</th>
          <th onClick={props.handleSort('color')}>Color {arrow('color')}</th>
          <th onClick={props.handleSort('wall')}>Wall {arrow('wall')}</th>
          <th onClick={props.handleSort('setter')}>Setter {arrow('setter')}</th>
          <th className='hidden-sm-down'>Edit</th>
          <th>{props.selected? <a href="#" onClick={props.deleteHandler}>Remove</a> : 'Select'}</th>
        </tr>
      </thead>
    )
}

RouteHeader.propTypes = {
    handleSort: PropTypes.func.isRequired,
    sort: PropTypes.string,
    selected: PropTypes.bool,
    deleteHandler: PropTypes.func
}

export default RouteHeader