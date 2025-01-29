import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MetaData from './common/MetaData';

import logo from '../images/logo-white.png';
import section3Image from '../images/aston-martin.jpg';

import ReactGA from 'react-ga';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize('UA-122997893-1');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        if (window.location.pathname === '/') {
            setTimeout(() => fadeOutEffect('.home__section-1 img'), 3000);
            setTimeout(() => {
                const button = document.querySelector('.home__section-1 .ui.grey.button');
                if (button) {
                    button.style.opacity = 1;
                }
            }, 5200);
            setTimeout(() => {
                const picture = document.querySelector('.home__section-1');
                if (picture) {
                    picture.classList.add('home__picture-fade');
                }
            }, 3400);
        }
    }, []);

    return (
        <div className="home__container">
            <MetaData
                title="Premiere Valet Services, Inc."
                keywords="valet parking, Los Angeles valet services, valet, valet companies, los angeles valet company, los angeles valet companies, valet, valet companies los angeles, valet parking service, valet parking"
            />
            <div className="home__section-1">
                <img src={logo} alt="PVS Logo" />
                <br />
                <Link to="/quote">
                    <Button color="grey" size="massive">
                        Request A Quote
                    </Button>
                </Link>
            </div>
            <div className="home__established">Established 1988</div>
            <div className="home__section-2">
                <p>
                    Premiere Valet Services, Inc., provides the highest standard of private valet parking and valet
                    parking management services. We provide valet parking service to private events with as few as 25-30
                    guests to movie studio and industry events for 1,000’s of guests. If you are looking for a Los
                    Angeles valet parking services, Hollywood valet parking services, Beverly Hills valet parking
                    services, Orange County valet parking services or Ventura County valet parking services we are ready
                    to meet your valet parking service needs.
                </p>
                <p>
                    For over 40 years Premiere Valet Services, Inc., has served all of Southern California with the
                    highest quality of valet parking service. With offices in Los Angeles and Laguna Beach we provide
                    valet parking service with locally based valet parking attendants throughout Los Angeles County,
                    Orange County and Ventura County. Our valet parking service consists of both male and female valet
                    parking attendants.
                </p>
                <p>
                    Not all valet parking companies are the same and we take pride in the level of valet parking service
                    we provide. Our commitment to quality is why we are considered the Premiere valet company throughout
                    Los Angeles, Beverly Hills, Malibu, Thousand Oaks, Newport Coast, Laguna Beach, Orange County, etc.
                </p>
                <p>
                    Whether you are searching for a Beverly Hills valet parking company to provide Beverly Hills valet
                    parking service or a Thousand Oaks valet parking company to provide Thousand Oaks Valet Parking
                    Service, Premiere Valet Services, Inc., is ready to assist with all of your valet parking needs.
                </p>
            </div>
            <div className="home__section-3">
                <div>
                    <div className="header-2">
                        <h3>We Proudly Provide Valet Parking For:</h3>
                    </div>
                    <h4>Private Events:</h4>
                    <ul>
                        <li>Wedding Valet Parking</li>
                        <li>Private Party Valet Parking</li>
                        <li>Private Dinner Valet Parking</li>
                        <li>Fundraiser Valet Parking</li>
                        <li>Other Special Events</li>
                    </ul>
                    <h4>Corporate Events:</h4>
                    <ul>
                        <li>Banquet Valet Parking</li>
                        <li>Gala Valet Parking</li>
                        <li>Seminar Valet Parking</li>
                    </ul>
                    <h4>Businesses:</h4>
                    <ul>
                        <li>Parking Lot Attendants</li>
                        <li>Hotel Parking Management</li>
                        <li>Concert & Festival Parking Management</li>
                    </ul>
                </div>
                <div>
                    <img src={section3Image} alt="" />
                </div>
            </div>
            <div className="home__section-4">
                <Link to="/quote">
                    <Button className="request-home-2" color="grey" size="massive">
                        Request A Quote
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;

function fadeOutEffect(target) {
    var fadeTarget = document.querySelector(target);
    if (fadeTarget) {
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.04;
            } else {
                clearInterval(fadeEffect);
                fadeTarget.style.display = 'none';
            }
        }, 20);
    }
}
