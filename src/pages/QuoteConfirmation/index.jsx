import React, { useEffect } from 'react';

import MetaData from '../../components/MetaData';
import './styles.css';
import logo from '../../images/logo-white.png';

const QuoteConfirmation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
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
