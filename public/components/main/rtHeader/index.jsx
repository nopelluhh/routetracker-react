import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledNavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import {stateToggle} from 'data/util'

class RtHeader extends Component {
    state = {
        isOpen: false
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
              <UncontrolledNavDropdown title="Gyms" id="basic-nav-dropdown">
                <DropdownToggle nav>
                  Gyms
                </DropdownToggle>
                <DropdownMenu>
                  { this.props.gyms ? this.props.gyms.map(gym => (
                      <LinkContainer key={ gym._id } to={ '/gyms/' + gym.url }>
                        <DropdownItem key={ gym._id }>
                          { gym.name }
                        </DropdownItem>
                      </LinkContainer>
                    )) : null }
                  <DropdownItem divider/>
                  <DropdownItem>
                    Separated link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledNavDropdown>
            <LinkContainer to="/add">
              <NavLink>
                Add
              </NavLink>
            </LinkContainer>
          </Nav>
          <Nav navbar className="ml-auto">
            <LinkContainer to="/logout">
              <NavLink>
                Logout
              </NavLink>
            </LinkContainer>
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
}

function mapState(state) {
    return {
        gyms: state.gyms
    }
}

export default connect(mapState)(RtHeader)
