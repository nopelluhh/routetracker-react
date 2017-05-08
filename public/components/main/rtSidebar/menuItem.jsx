import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const MenuItem = ({item}) => (
    <Link to={'/' + item.to} className="sidebar-link">
        <div>
            <i className={'glyphicon ' + item.icon}></i>
            {item.name}
        </div>
    </Link>
)

MenuItem.propTypes = {
    item: PropTypes.object
}

MenuItem.contextTypes = {
    router: PropTypes.object
}

export default MenuItem