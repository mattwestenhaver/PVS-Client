import React, { useEffect } from 'react';

import insurance from '../images/coi.jpg';
import MetaData from './common/MetaData';

const Insurance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <MetaData title="Insurance - Premiere Valet Services, Inc." />
            <div className="insurance__header header-1"></div>
            <div className="insurance__section-1">
                <div className="page-header">
                    <hr />
                    <h1>INSURANCE</h1>
                    <hr />
                </div>
                <p>
                    Premiere Valet Services, Inc., has been in business for over 40 years. While we consider ourselves
                    to be the best valet parking company in the business, our pricing remains competitive with that of
                    other companies with far less experience and who are not able to offer the level of insurance we
                    provide our clients.
                </p>
                <p>
                    Below is a copy of our current insurance certificate. We have every confidence that we can provide
                    the level of customer service and insurance requirements that you need.
                </p>
            </div>
            <div className="insurance__section-2">
                <div>
                    <img src={insurance} alt="Image of Certificate of Liablity Insurance" />
                </div>
            </div>
        </div>
    );
};

export default Insurance;
