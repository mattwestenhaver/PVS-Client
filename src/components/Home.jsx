import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import MetaData from './common/MetaData';

import logo from '../images/logo-white.png';
import heroPhoto from '../images/home-hero.jpg';
import heroPhotoMobile from '../images/home-hero-mobile.jpg';
import yachtClubImage from '../images/home-yacht-club.jpg';
import bmwImage from '../images/home-bmw.jpg';

const INTRO_SEEN_KEY = 'pvs-home-intro-seen';

// The hero intro (logo, then photo, then quote button) plays once per browser session,
// and never for visitors who have reduced motion turned on.
const shouldPlayIntro = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return false;
    }
    try {
        return !sessionStorage.getItem(INTRO_SEEN_KEY);
    } catch {
        return true;
    }
};

const markIntroSeen = () => {
    try {
        sessionStorage.setItem(INTRO_SEEN_KEY, 'true');
    } catch {
        // Storage can be unavailable (e.g. some private browsing modes); the intro just plays again
    }
};

// Resolves once the hero photo has downloaded (or failed to), so the fade never plays over a blank hero.
// Uses the same image as the CSS for this screen size, so the browser only downloads it once.
const loadHeroPhoto = () =>
    new Promise(resolve => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = resolve;
        image.src = window.matchMedia('(max-width: 768px)').matches ? heroPhotoMobile : heroPhoto;
    });

// Intro stages, in order: logo -> logoFading -> photo -> ready
const Home = () => {
    const [playIntro] = useState(shouldPlayIntro);
    const [stage, setStage] = useState(playIntro ? 'logo' : 'ready');

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!playIntro) {
            return;
        }
        markIntroSeen();

        let cancelled = false;
        const timeouts = [];
        const after = (ms, callback) => timeouts.push(setTimeout(callback, ms));

        after(2900, () => setStage('logoFading'));

        // Show the photo at 3.2s, or later if it's still downloading
        const minimumWait = new Promise(resolve => after(3200, resolve));
        Promise.all([minimumWait, loadHeroPhoto()]).then(() => {
            if (cancelled) {
                return;
            }
            setStage('photo');
            after(1300, () => setStage('ready'));
        });

        return () => {
            cancelled = true;
            timeouts.forEach(clearTimeout);
        };
    }, [playIntro]);

    const showLogo = stage === 'logo' || stage === 'logoFading';
    const showPhoto = stage === 'photo' || stage === 'ready';

    return (
        <div className="home__container">
            <MetaData
                title="Premiere Valet Services, Inc."
                keywords="valet parking, Los Angeles valet services, valet, valet companies, los angeles valet company, los angeles valet companies, valet, valet companies los angeles, valet parking service, valet parking"
            />
            <div className={`home__section-1${showPhoto ? ' home__picture-fade' : ''}`}>
                {showLogo && (
                    <img
                        className={`home__logo${stage === 'logoFading' ? ' home__logo--fading' : ''}`}
                        src={logo}
                        alt="PVS Logo"
                    />
                )}
                <Link
                    className={`home__quote-button${stage === 'ready' ? ' home__quote-button--visible' : ''}`}
                    to="/quote"
                >
                    <button className="ui grey massive button">Request A Quote</button>
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
            <img className="home__banner" src={bmwImage} alt="Premiere Valet attendants at Crevier BMW" />
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
                    <img src={yachtClubImage} alt="Premiere Valet attendants at Balboa Yacht Club" />
                </div>
            </div>
            <div className="home__section-4">
                <Link to="/quote">
                    <button className="ui grey massive button request-home-2">Request A Quote</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
