import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import smallLogo from '../images/logo-2.png'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to='/'><img className='navbar-logo' src={smallLogo} alt='PVS logo'/></LinkContainer>
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
                <MenuItem eventKey={2.1}>About</MenuItem>
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
              <NavDropdown eventkey={8} title="Los Angeles" id="basic-nav-dropdown" className='second-dropdown'>  
                <LinkContainer to='/losangeles'>
                  <MenuItem eventKey={8.1}>Los Angeles</MenuItem>
                </LinkContainer>
                <LinkContainer to='/pasadena'>
                  <MenuItem eventKey={8.2}>Pasadena</MenuItem>
                </LinkContainer>
                <LinkContainer to='/sanmarino'>
                  <MenuItem eventKey={8.3}>San Marino</MenuItem>
                </LinkContainer>
                <LinkContainer to='/lacanada'>
                  <MenuItem eventKey={8.4}>La Canada Flintridge</MenuItem>
                </LinkContainer>
                <LinkContainer to='/brentwood'>
                  <MenuItem eventKey={8.5}>Brentwood</MenuItem>
                </LinkContainer>
                <LinkContainer to='/palisades'>
                  <MenuItem eventKey={8.6}>Pacific Palisades</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/hollywood'>
                <MenuItem eventKey={3.2}>Hollywood</MenuItem>
              </LinkContainer>
              <LinkContainer to='/beverlyhills'>
                <MenuItem eventKey={3.3}>Beverly Hills</MenuItem>
              </LinkContainer>
              <LinkContainer to='/beverlypark'>
                <MenuItem eventKey={3.4}>Beverly Park</MenuItem>
              </LinkContainer>
              <LinkContainer to='/belair'>
                <MenuItem eventKey={3.5}>Bel Air</MenuItem>
              </LinkContainer>
              <LinkContainer to='/malibu'>
                <MenuItem eventKey={3.6}>Malibu</MenuItem>
              </LinkContainer>
              <NavDropdown eventkey={9} title="Ventura County" id="basic-nav-dropdown" className='second-dropdown'>
                <LinkContainer to='/hiddenhills'>            
                  <MenuItem eventKey={9.1}>Hidden Hills</MenuItem>
                </LinkContainer>
                <LinkContainer to='/thousandoaks'>
                  <MenuItem eventKey={9.2}>Thousand Oaks</MenuItem>
                </LinkContainer>
                <LinkContainer to='/westlakevillage'>
                  <MenuItem eventKey={9.3}>Westlake Village</MenuItem>
                </LinkContainer>
                <LinkContainer to='/northranch'>
                  <MenuItem eventKey={9.4}>North Ranch</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown eventkey={10} title="Orange County" id="basic-nav-dropdown" className='second-dropdown'>
                <LinkContainer to='/lagunabeach'>
                  <MenuItem eventKey={10.1}>Laguna Beach</MenuItem>
                </LinkContainer>
                <LinkContainer to='/newportcoast'>
                  <MenuItem eventKey={10.2}>Newport Coast</MenuItem>
                </LinkContainer>
                <LinkContainer to='/emeraldbay'>
                  <MenuItem eventKey={10.3}>Emerald Bay</MenuItem>
                </LinkContainer>
                <LinkContainer to='/irvine'>
                  <MenuItem eventKey={10.4}>Irvine</MenuItem>
                </LinkContainer>
                <LinkContainer to='/coronadelmar'>
                  <MenuItem eventKey={10.4}>Corona del Mar</MenuItem>
                </LinkContainer>
                <LinkContainer to='/cotodecaza'>
                  <MenuItem eventKey={10.4}>Coto de Caza</MenuItem>
                </LinkContainer>
                <LinkContainer to='/newportbeach'>
                  <MenuItem eventKey={10.4}>Newport Beach</MenuItem>
                </LinkContainer>
                <LinkContainer to='/pelicanhill'>
                  <MenuItem eventKey={10.4}>Pelican Hill</MenuItem>
                </LinkContainer>
                <LinkContainer to='/danapoint'>
                  <MenuItem eventKey={10.4}>Dana Point</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/manhattanbeach'>
                <MenuItem eventKey={3.7}>Manhattan Beach</MenuItem>
              </LinkContainer>
              <LinkContainer to='/palosverdes'>
                <MenuItem eventKey={3.8}>Palos Verdes</MenuItem>
              </LinkContainer>
              <LinkContainer to='/rollinghills'>
                <MenuItem eventKey={3.9}>Rolling Hills</MenuItem>
              </LinkContainer>
              <LinkContainer to='/longbeach'>
                <MenuItem eventKey={3.10}>Long Beach</MenuItem>
              </LinkContainer>
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