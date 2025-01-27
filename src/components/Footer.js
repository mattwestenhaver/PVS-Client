import React from 'react';
import { Icon } from 'semantic-ui-react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <h5>Premiere Valet Services, Inc.</h5>
                <h5>The Highest Quality Valet Parking Service In Southern California</h5>
                {/* <h5 className='footer-work'>Want to work with us? Click <Link to='/employment'>here</Link>.</h5> */}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.yelp.com/biz/premiere-valet-service-los-angeles-3"
                >
                    <Icon name="yelp" size="big" />
                </a>
                {/* <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/company/premiere-valet-services-inc./'><Icon name='linkedin' size='big' /></a> */}
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/premierevaletservices/">
                    <Icon name="facebook" size="big" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/premierevalet/">
                    <Icon name="instagram" size="big" />
                </a>
                <h5>
                    <a href="mailto:info@premierevaletparking.com">info@premierevaletparking.com</a>
                </h5>
                <h5>
                    Los Angeles and Ventura County: <a href="tel:+13238765816">(323) 876-5816</a>
                </h5>
                <h5>
                    Orange County: <a href="tel:+19494978811">(949) 497-8811</a>
                </h5>
            </div>
        );
    }
}

export default Footer;
