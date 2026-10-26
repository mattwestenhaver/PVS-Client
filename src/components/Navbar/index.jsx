import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';

import smallLogo from '../../images/logo-white-small.png';
import './styles.css';
import { counties } from '../../data/cities';

// Renders Bootstrap 3 navbar markup, styled by the Bootstrap CSS in index.html and styles.css.
// On desktop (1025px+) dropdowns also open on hover through CSS.
const aboutLinks = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/insurance', label: 'Insurance' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/staff', label: 'Management Team' },
];

// "Areas of Service" menu: one submenu per county
const areas = counties.map(county => ({
    label: county.name,
    links: county.cities.map(city => ({ to: city.path, label: city.name })),
}));

const contactLinks = [
    { to: '/contact', label: 'Contact Information' },
    { to: '/employment', label: 'Employment' },
];

const NavBar = () => {
    const { pathname } = useLocation();
    const [expanded, setExpanded] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const navRef = useRef(null);

    const closeAll = () => {
        setExpanded(false);
        setOpenMenu(null);
        setOpenSubmenu(null);
    };

    // Close menus on a click outside the navbar or on Escape
    useEffect(() => {
        const onClick = e => {
            if (!navRef.current.contains(e.target)) closeAll();
        };
        const onKeyDown = e => {
            if (e.key === 'Escape') closeAll();
        };
        document.addEventListener('click', onClick);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('click', onClick);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    const toggleMenu = name => e => {
        e.preventDefault();
        setOpenMenu(prev => (prev === name ? null : name));
        setOpenSubmenu(null);
    };

    const toggleSubmenu = name => e => {
        e.preventDefault();
        setOpenSubmenu(prev => (prev === name ? null : name));
    };

    const navLink = ({ to, label }, inMenu = false) => (
        <li key={to} role="presentation" className={pathname === to ? 'active' : ''}>
            <Link to={to} role={inMenu ? 'menuitem' : undefined} onClick={closeAll}>
                {label}
            </Link>
        </li>
    );

    const isCurrent = links => links.some(link => link.to === pathname);

    // isActive marks the section containing the current page, e.g. "Areas of Service" on a city page
    const dropdown = ({ label, isOpen, onToggle, isActive, className = '' }, children) => (
        <li className={[className, 'dropdown', isOpen && 'open', isActive && 'active'].filter(Boolean).join(' ')}>
            <a
                href="#"
                role="button"
                className="dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={onToggle}
            >
                {label} <span className="caret" />
            </a>
            <ul role="menu" className="dropdown-menu">
                {children}
            </ul>
        </li>
    );

    return (
        <nav ref={navRef} className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand" onClick={closeAll}>
                        <img className="navbar-logo" src={smallLogo} alt="PVS logo" />
                    </Link>
                    <button
                        type="button"
                        className={`navbar-toggle${expanded ? '' : ' collapsed'}`}
                        aria-expanded={expanded}
                        onClick={() => setExpanded(prev => !prev)}
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                </div>
                <div className={`navbar-collapse collapse${expanded ? ' in' : ''}`}>
                    <ul className="nav navbar-nav navbar-right">
                        {navLink({ to: '/', label: 'Home' })}
                        {dropdown(
                            {
                                label: 'About Us',
                                isOpen: openMenu === 'about',
                                onToggle: toggleMenu('about'),
                                isActive: isCurrent(aboutLinks),
                            },
                            aboutLinks.map(link => navLink(link, true)),
                        )}
                        {dropdown(
                            {
                                label: 'Areas of Service',
                                isOpen: openMenu === 'areas',
                                onToggle: toggleMenu('areas'),
                                isActive: areas.some(area => isCurrent(area.links)),
                            },
                            areas.map(area => (
                                <React.Fragment key={area.label}>
                                    {dropdown(
                                        {
                                            label: area.label,
                                            isOpen: openSubmenu === area.label,
                                            onToggle: toggleSubmenu(area.label),
                                            isActive: isCurrent(area.links),
                                            className: 'second-dropdown',
                                        },
                                        area.links.map(link => navLink(link, true)),
                                    )}
                                </React.Fragment>
                            )),
                        )}
                        {dropdown(
                            {
                                label: 'Contact Us',
                                isOpen: openMenu === 'contact',
                                onToggle: toggleMenu('contact'),
                                isActive: isCurrent(contactLinks),
                            },
                            contactLinks.map(link => navLink(link, true)),
                        )}
                        {navLink({ to: '/quote', label: 'Request A Quote' })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
