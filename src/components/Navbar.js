import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import smallLogo from '../images/logo-white-small.png';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <img className="navbar-logo" src={smallLogo} alt="PVS logo" />
                        </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer exact to="/">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={2} title="About Us" id="basic-nav-dropdown">
                            <LinkContainer to="/about">
                                <MenuItem eventKey={2.1}>About</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/services">
                                <MenuItem eventKey={2.2}>Services</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/insurance">
                                <MenuItem eventKey={2.3}>Insurance</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/testimonials">
                                <MenuItem eventKey={2.4}>Testimonials</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/staff">
                                <MenuItem eventKey={2.5}>Management Team</MenuItem>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown eventKey={3} title="Areas of Service" id="basic-nav-dropdown">
                            <NavDropdown
                                eventkey={8}
                                title="Los Angeles County"
                                id="basic-nav-dropdown"
                                className="second-dropdown"
                            >
                                <LinkContainer to="/losangeles">
                                    <MenuItem eventKey={8.1}>Los Angeles</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/hollywood">
                                    <MenuItem eventKey={8.2}>Hollywood</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/beverlyhills">
                                    <MenuItem eventKey={8.3}>Beverly Hills</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/beverlypark">
                                    <MenuItem eventKey={8.4}>Beverly Park</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/belair">
                                    <MenuItem eventKey={8.5}>Bel Air</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/brentwood">
                                    <MenuItem eventKey={8.6}>Brentwood</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/palisades">
                                    <MenuItem eventKey={8.7}>Pacific Palisades</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/santamonica">
                                    <MenuItem eventKey={8.8}>Santa Monica</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/pasadena">
                                    <MenuItem eventKey={8.9}>Pasadena</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/sanmarino">
                                    <MenuItem eventKey={8.1}>San Marino</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/lacanada">
                                    <MenuItem eventKey={8.11}>La Canada Flintridge</MenuItem>
                                </LinkContainer>
                            </NavDropdown>

                            <NavDropdown
                                eventkey={9}
                                title="Ventura County"
                                id="basic-nav-dropdown"
                                className="second-dropdown"
                            >
                                <LinkContainer to="/malibu">
                                    <MenuItem eventKey={9.1}>Malibu</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/thousandoaks">
                                    <MenuItem eventKey={9.2}>Thousand Oaks</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/hiddenhills">
                                    <MenuItem eventKey={9.3}>Hidden Hills</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/westlakevillage">
                                    <MenuItem eventKey={9.4}>Westlake Village</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/northranch">
                                    <MenuItem eventKey={9.5}>North Ranch</MenuItem>
                                </LinkContainer>
                            </NavDropdown>

                            <NavDropdown
                                eventkey={10}
                                title="Orange County"
                                id="basic-nav-dropdown"
                                className="second-dropdown"
                            >
                                <LinkContainer to="/irvine">
                                    <MenuItem eventKey={10.1}>Irvine</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/lagunabeach">
                                    <MenuItem eventKey={10.2}>Laguna Beach</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/newportcoast">
                                    <MenuItem eventKey={10.3}>Newport Coast</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/newportbeach">
                                    <MenuItem eventKey={10.4}>Newport Beach</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/emeraldbay">
                                    <MenuItem eventKey={10.5}>Emerald Bay</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/coronadelmar">
                                    <MenuItem eventKey={10.6}>Corona del Mar</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/cotodecaza">
                                    <MenuItem eventKey={10.7}>Coto de Caza</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/pelicanhill">
                                    <MenuItem eventKey={10.8}>Pelican Hill</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/danapoint">
                                    <MenuItem eventKey={10.9}>Dana Point</MenuItem>
                                </LinkContainer>
                            </NavDropdown>

                            <NavDropdown
                                eventkey={11}
                                title="South Bay"
                                id="basic-nav-dropdown"
                                className="second-dropdown"
                            >
                                <LinkContainer to="/manhattanbeach">
                                    <MenuItem eventKey={11.1}>Manhattan Beach</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/palosverdes">
                                    <MenuItem eventKey={11.2}>Palos Verdes</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/rollinghills">
                                    <MenuItem eventKey={11.3}>Rolling Hills</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/longbeach">
                                    <MenuItem eventKey={11.4}>Long Beach</MenuItem>
                                </LinkContainer>
                            </NavDropdown>
                        </NavDropdown>

                        <NavDropdown eventKey={4} title="Contact Us" id="basic-nav-dropdown">
                            <LinkContainer to="/contact">
                                <MenuItem eventKey={4.1}>Contact Information</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/employment">
                                <MenuItem eventKey={4.2}>Employment</MenuItem>
                            </LinkContainer>
                        </NavDropdown>

                        <LinkContainer to="/quote">
                            <NavItem eventKey={5}>Request A Quote</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
