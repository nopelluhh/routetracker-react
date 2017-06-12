import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import PropTypes from 'prop-types'

function isActive(props, tab) {
    return props.active === tab ? 'active text-capitalize' : 'text-capitalize'
}

const Slider = () => <li className='tab-slider'/>

const tabSwitcher = (props) => (
    <Nav tabs>
      { props.tabs.map((tab, ind) => (
            <NavItem key={tab}>
              <NavLink
                className={ isActive(props, tab) } 
                onClick={ () => {props.toggle(tab)} }>
                {tab}
              </NavLink>
              
            </NavItem>
        )) }
        <Slider key='slider'/>
    </Nav>
)

tabSwitcher.propTypes = {
    tabs: PropTypes.array.isRequired,
    active: PropTypes.string,
    toggle: PropTypes.func
}

tabSwitcher.defaultProps = {
    tabs: []
}

export default tabSwitcher