import { useEffect } from 'react';
import ReactGA from 'react-ga';

import MetaData from './common/MetaData';
import logo from '../images/logo-white.png';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize('UA-122997893-1');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

const QuoteConfirmation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
    }, []);

    return (
        <div className="confirmation__container">
            <MetaData title="Thank You - Premiere Valet Services, Inc." />
            <img src={logo} alt="Premiere Valet Services Logo" />
            <h3>Thank you for choosing Premiere Valet Services, Inc. for your next event!</h3>
            <h3>We will get back to you as soon as possible.</h3>
        </div>
    );
};

export default QuoteConfirmation;
