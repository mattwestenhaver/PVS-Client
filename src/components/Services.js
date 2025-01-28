import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import hondaIMG from '../images/honda.jpg';
import chineseNY from '../images/chinese-new-year.jpg';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize('UA-122997893-1');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        // navOpacity.changingMenuBar()
        initGA();
        logPageView();
    }, []);

    return (
        <div className="services-container">
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="keywords"
                    content="los angeles valet parking, valet services, valet service company, valet company los angeles, valet companies, private valet, valet, valet attendants, beverly hills valet, bel air valet, valet service"
                />
                <title>Our Services - Premiere Valet Services, Inc.</title>
            </Helmet>
            <div className="services-header header-1"></div>
            <div className="services-section-1">
                <div className="page-header">
                    <hr />
                    <h1>OUR SERVICES</h1>
                    <hr />
                </div>
                <br />
                <div className="services-column-container">
                    <div className="services-column">
                        <div className="header-2">
                            <h3>Valet for Private Parties</h3>
                        </div>
                        <p>
                            Whether it is a small dinner party or an exclusive Hollywood Hills event, Premiere Valet
                            Services, Inc., is there. If we have not worked on your street recently, we will provide any
                            necessary site visits to make sure your valet parking needs are exceeded. We will take care
                            of any city permit requirements. It does not matter how challenging your event location
                            might be, we will provide you with the best solution.
                        </p>
                        <img src={chineseNY} className="services-private-img" alt="Valet in Chinese New Year Uniform" />
                    </div>
                    <div className="services-column">
                        <div className="header-2">
                            <h3>Business Solutions and Commercial Services</h3>
                        </div>
                        <p>
                            In addition to providing valet for special events, we also provide parking solutions for
                            businesses. Many of our clients run out of parking spaces. We can provide a number of
                            options to help troubleshoot your parking situation. We can provide valet parking attendants
                            to assist double parking or we can valet vehicles off site. If your business is running
                            short of space for your employees and clients, give us a call. Our attendant service is
                            flexible. We can provide parking attendants on a day to day basis. At Sunset Las Palmas
                            Studios, we provide valet parking attendants on a daily basis. We also provide valet parking
                            attendants for Disney Studios in Burbank for their busier production days. We can adjust to
                            fit any demand.
                        </p>
                        <img src={hondaIMG} className="services-business-img" alt="Valet With Honda Parking Sign" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
