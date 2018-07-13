import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to='/'><a>Premiere Valet Services</a></LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer exact to='/'>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={2} title="About Us" id="basic-nav-dropdown">
              <LinkContainer to='/about'>
                <MenuItem eventKey={2.1}>Our Story</MenuItem>
              </LinkContainer>
              <LinkContainer to='/services'>
                <MenuItem eventKey={2.2}>Services</MenuItem>
              </LinkContainer>
              <LinkContainer to='/insurance'>
                <MenuItem eventKey={2.3}>Insurance</MenuItem>
              </LinkContainer>
              <LinkContainer to='/testimonials'>
                <MenuItem eventKey={2.4}>Testimonials</MenuItem>
              </LinkContainer>
              <LinkContainer to='/staff'>
                <MenuItem eventKey={2.5}>Our Staff</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Areas of Service" id="basic-nav-dropdown">
              <NavDropdown eventkey={8} title="Los Angeles" id="basic-nav-dropdown">            
                <MenuItem eventKey={8.1}>Pasadena</MenuItem>
                <MenuItem eventKey={8.2}>San Marino</MenuItem>
                <MenuItem eventKey={8.3}>La Canada Flintridge</MenuItem>
                <MenuItem eventKey={8.4}>Brentwood</MenuItem>
                <MenuItem eventKey={8.5}>Pacific Palisades</MenuItem>
              </NavDropdown>
              <MenuItem eventKey={3.2}>Hollywood</MenuItem>
              <MenuItem eventKey={3.3}>Beverly Hills</MenuItem>
              <MenuItem eventKey={3.4}>Beverly Park</MenuItem>
              <MenuItem eventKey={3.5}>Bel Air</MenuItem>
              <MenuItem eventKey={3.6}>Malibu</MenuItem>
              <NavDropdown eventkey={9} title="Ventura County" id="basic-nav-dropdown">            
                <MenuItem eventKey={9.1}>Hidden Hills</MenuItem>
                <MenuItem eventKey={9.2}>Thousand Oaks</MenuItem>
                <MenuItem eventKey={9.3}>Westlake Village</MenuItem>
                <MenuItem eventKey={9.4}>North Ranch</MenuItem>
              </NavDropdown>
              <NavDropdown eventkey={10} title="Orange County" id="basic-nav-dropdown">
                <MenuItem eventKey={10.1}>Laguna Beach</MenuItem>
                <MenuItem eventKey={10.2}>Newport Coast</MenuItem>
                <MenuItem eventKey={10.3}>Emerald Bay</MenuItem>
                <MenuItem eventKey={10.4}>Irvine</MenuItem>
                <MenuItem eventKey={10.4}>Corona del Mar</MenuItem>
                <MenuItem eventKey={10.4}>Coto de Caza</MenuItem>
                <MenuItem eventKey={10.4}>Newport Beach</MenuItem>
                <MenuItem eventKey={10.4}>Pelican Hill</MenuItem>
                <MenuItem eventKey={10.4}>Dana Point</MenuItem>
              </NavDropdown>
              <MenuItem eventKey={3.7}>Manhattan Beach</MenuItem>
              <MenuItem eventKey={3.8}>Palos Verdes</MenuItem>
              <MenuItem eventKey={3.9}>Rolling Hills</MenuItem>
              <MenuItem eventKey={3.10}>Long Beach</MenuItem>
            </NavDropdown>
            <LinkContainer to='/contact'>
              <NavItem eventKey={4}>
                Contact Us
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/quote'>
              <NavItem eventKey={5}>
                Request A Quote
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar