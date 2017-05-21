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
          <th onClick={props.handleSort('setter')}>Setter {arrow('setter')}</th>
          <th>Edit</th>
          <th>Select {renderIf(props.selected)(<span>/ <a onClick={props.deleteHandler}>Remove</a></span>)}</th>
        </tr>
      </thead>
    )
}

RouteHeader.propTypes = {
    handleSort: PropTypes.func.isRequired,
    sort: PropTypes.string
}

export default RouteHeader