import React from 'react';
import { Button, Responsive } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
// import navOpacity from '../navBar.js'
import ReactGA from 'react-ga';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize('UA-122997893-1');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

class Contact extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        // navOpacity.solidBar()
        initGA();
        logPageView();
    }

    scrollDown() {
        this.refs.section1.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }

    render() {
        return (
            <div className="contact-container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact Us - Premiere Valet Services, Inc.</title>
                </Helmet>
                <div className="contact-header">
                    <Responsive minWidth={769}>
                        <Button color="black" size="massive" onClick={this.scrollDown.bind(this)}>
                            Contact Us
                        </Button>
                    </Responsive>
                    <Responsive maxWidth={768}>
                        <a className="mobile-contact-button" href="tel:+13238765816">
                            Contact Us
                        </a>
                    </Responsive>
                </div>
                <div ref="section1" className="contact-section-1">
                    <div className="contact-blurb">
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
    }
}

export default Contact;
