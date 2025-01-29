import { useEffect, useRef } from 'react';
import { Button } from 'semantic-ui-react';
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

const Contact = () => {
    const myRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
    }, []);

    const scrollDown = () => {
        myRef.scrollIntoView({ block: 'end', behavior: 'smooth' });
    };

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
            <div ref={myRef} className="contact__section-1">
                <div className="contact__blurb">
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
