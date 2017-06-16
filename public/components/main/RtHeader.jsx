import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {NavLink as NavRouterLink} from 'react-router-dom'

import {stateToggle} from 'data/util'

class RtHeader extends Component {
	state = {
		isOpen: false,
		dropdownIsOpen: false
	}

	static propTypes = {
		gyms: PropTypes.array
	}

	render() {
		return (
      <Navbar toggleable color="primary" inverse>
          <LinkContainer to="/">
            <NavbarBrand>
              Routetracker
            </NavbarBrand>
          </LinkContainer>
          <NavbarToggler right onClick={this.toggle}/>
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav navbar>
              <NavDropdown title="Gyms" id="basic-nav-dropdown" toggle={this.toggleDropdown} isOpen={this.state.dropdownIsOpen}>
                <DropdownToggle nav>
                  Gyms
                </DropdownToggle>
                <DropdownMenu onClick={this.toggleDropdown}>
                  { this.props.gyms ? this.props.gyms.map(gym => (
                    <NavRouterLink className='dropdown-item' key={ gym._id } to={ '/gyms/' + gym.url }>
                          { gym.name }
                      </NavRouterLink>
                    )) : null }
                  <DropdownItem divider/>
                  <DropdownItem>
                    Separated link
                </DropdownItem>
              </DropdownMenu>
            </NavDropdown>
            <LinkContainer to="/add">
              <NavLink>
                Add
              </NavLink>
            </LinkContainer>
          </Nav>
          <Nav navbar className="ml-auto">
              <NavLink href="/logout">
                Logout
              </NavLink>
            <LinkContainer to="/account">
              <NavLink>
                My Account
              </NavLink>
            </LinkContainer>
          </Nav>
        </Collapse>
      </Navbar>
		)
	}

	toggle = () => {
		this.setState(stateToggle('isOpen'))
	}

	toggleDropdown = () => {
		this.setState(stateToggle('dropdownIsOpen'))
	}
}

function mapState(state) {
	return {
		gyms: state.gyms
	}
}

export default connect(mapState)(RtHeader)
