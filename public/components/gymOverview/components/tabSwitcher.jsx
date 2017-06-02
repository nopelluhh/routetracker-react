import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import PropTypes from 'prop-types'

function isActive(props, num) {
    return props.active === num ? 'active text-capitalize' : 'text-capitalize'
}

const tabSwitcher = (props) => (
    <Nav tabs>
      { props.tabs.map((tab, ind) => (
            <NavItem key={tab}>
              <NavLink
                className={ isActive(props, ind) } 
                onClick={ () => {props.toggle(ind)} }>
                {tab}
              </NavLink>
            </NavItem>
        )) }
    </Nav>
)

tabSwitcher.propTypes = {
    tabs: PropTypes.array.isRequired,
    active: PropTypes.number,
    toggle: PropTypes.func
}

export default tabSwitcher