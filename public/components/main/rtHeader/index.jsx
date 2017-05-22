import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledNavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'

class RtHeader extends Component {
    render() {
        return (
      <Navbar toggleable color="primary" inverse>
          <LinkContainer to="/add">
            <NavbarBrand>
              Routetracker
            </NavbarBrand>
          </LinkContainer>
          <NavbarToggler />
          <Collapse isOpen={ true } navbar>
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
          <Nav>
            <LinkContainer to="/logout">
              <NavLink href="#">
                Logout
              </NavLink>
            </LinkContainer>
            <LinkContainer to="/account">
              <NavLink href="#">
                My Account
              </NavLink>
            </LinkContainer>
          </Nav>
        </Collapse>
      </Navbar>
        )
    }
}

function mapState(state) {
    return {
        gyms: state.gyms
    }
}

export default connect(mapState)(RtHeader)
