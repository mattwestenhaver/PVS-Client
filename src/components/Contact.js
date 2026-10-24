import React, { useRef, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import MetaData from './common/MetaData';

const Contact = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollDown = () => contactRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });

    return (
        <div>
            <MetaData title="Contact Us - Premiere Valet Services, Inc." />
            <div className="contact__header">
                <Button color="black" size="massive" onClick={scrollDown}>
                    Contact Us
                </Button>
                <a className="contact__mobile-button" href="tel:+13238765816">
                    Contact Us
                </a>
            </div>
            <div ref={contactRef} className="contact__section-1">
                <div className="contact__information">
                    <div className="header-2 centered">
                        <h3>Questions? Give Us A Call</h3>
                    </div>
                    <p>Our office is open Monday to Friday 9:00am - 5:30pm</p>
                    <p>We have a manager available and on call 24 hours a day, seven days a week.</p>
                    <p>
                        Los Angeles and Ventura County: <a href="tel:+13238765816">(323) 876-5816</a>
                    </p>
                    <p>
                        Orange County: <a href="tel:+19494978811">(949) 497-8811</a>
                    </p>
                    <p>
                        Email: <a href="mailto:info@premierevaletparking.com">info@premierevaletparking.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
