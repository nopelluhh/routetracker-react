import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'

class RtHeader extends Component {
    render() {
        return (
      <Navbar inverse collapseOnSelect fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Routetracker</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={ 3 } title="Gyms" id="basic-nav-dropdown">
              { this.props.gyms ? this.props.gyms.map(gym => (
                  <LinkContainer key={gym._id} to={ '/gyms/' + gym.url }>
                    <MenuItem key={ gym._id } eventKey={ 3.1 }>
                    { gym.name }
                    </MenuItem>
                  </LinkContainer>
                )) : null }
              <MenuItem divider/>
              <MenuItem eventKey={ 3.3 }>Separated link</MenuItem>
            </NavDropdown>
            <LinkContainer to="/add">
              <NavItem eventKey={ 2 }>Add</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/logout">
              <NavItem eventKey={ 1 } href="#">Logout</NavItem>
            </LinkContainer>
            <LinkContainer to="/account">
              <NavItem eventKey={ 2 } href="#">My Account</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
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
