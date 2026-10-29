import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <h5>Premiere Valet Services, Inc.</h5>
            <h5>The Highest Quality Valet Parking Service In Southern California</h5>
            {/* <h5 className='footer-work'>Want to work with us? Click <Link to='/employment'>here</Link>.</h5> */}
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.yelp.com/biz/premiere-valet-service-los-angeles-3"
                aria-label="Yelp"
            >
                <i aria-hidden="true" className="yelp big icon" />
            </a>
            {/* <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/company/premiere-valet-services-inc./'><i aria-hidden='true' className='linkedin big icon' /></a> */}
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/premierevaletservices/"
                aria-label="Facebook"
            >
                <i aria-hidden="true" className="facebook big icon" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/premierevalet/"
                aria-label="Instagram"
            >
                <i aria-hidden="true" className="instagram big icon" />
            </a>
            <h5>
                <a href="mailto:info@premierevaletparking.com">info@premierevaletparking.com</a>
            </h5>
            <h5>
                Los Angeles / Ventura Counties: <a href="tel:+13238765816">(323) 876-5816</a>
            </h5>
            <h5>
                Orange County: <a href="tel:+19494978811">(949) 497-8811</a>
            </h5>
        </div>
    );
};

export default Footer;
