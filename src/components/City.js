import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import MetaData from './common/MetaData';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize('UA-122997893-1');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

const City = ({ city }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
    }, []);

    const helmetData = `${city} Valet Parking, Valet Parking ${city}, ${city} Valet Service, Valet Service ${city}, ${city} Valet, Valet Service, Valet Attendants ${city}`;

    return (
        <div className="city-container">
            <MetaData title={`${city} - Premiere Valet Services, Inc.`} keywords={helmetData} />
            <div className="city-section-1 header-1"></div>
            <div className="city-section-2">
                <hr />
                <h1>{city} Valet Services</h1>
                <hr />
                <p>
                    There are many {city} Valet Companies, but Premiere Valet Services, Inc. is proudly the number one
                    in {city}. If you are hosting an event in {city} and need valet, Premiere Valet Services, Inc. can
                    offer you first class valet services and a level of service that no other valet company in the area
                    can.
                </p>
                <p>
                    With over 30 years in the valet business, Premiere Valet Services, Inc. is the number one valet
                    service in all of Southern California. We are the first choice valet company for all private events;
                    from pre-Oscar private parties to small home gatherings. Parking in {city} can be difficult, but
                    with Premiere Valet Services, Inc. you and your guests can enjoy your next private event with peace
                    of mind.
                </p>
                <p>
                    Our <span className="italic">premiere</span> valet parking staff is the most qualified, experienced
                    and reliable valet parking staff you will find in any {city} valet company. Contact us any time at
                    {[
                        'Irvine',
                        'Laguna Beach',
                        'Newport Coast',
                        'Newport Beach',
                        'Emerald Bay',
                        'Corona del Mar',
                        'Coto de Caza',
                        'Pelican Hill',
                        'Dana Point',
                    ].includes(city) ? (
                        <a href="tel:+19494978811"> (949) 497-8811 </a>
                    ) : (
                        <a href="tel:+13238765816"> (323) 876-5816 </a>
                    )}
                    or click <Link to="/quote">here</Link> and let us make the best of your next valet parking
                    experience.
                </p>
            </div>
        </div>
    );
};

export default City;
