import React from 'react'
import { Icon } from 'semantic-ui-react'

class Footer extends React.Component {
  render() {
    return(
      <div className='footer-container'>
        <h5>Premiere Valet Service, Inc.</h5>
        <h5>The Highest Quality Valet Parking Service In Southern California</h5>
        <a target='_blank' href='https://www.yelp.com/biz/premiere-valet-service-los-angeles-3'><Icon name='yelp' size='big' /></a>
        <a target='_blank' href='https://www.linkedin.com/company/premiere-valet-services-inc./'><Icon name='linkedin' size='big' /></a>
        <a target='_blank' href='https://www.facebook.com/premierevaletservices/'><Icon name='facebook' size='big' /></a>
        <a target='_blank' href='https://www.instagram.com/premierevalet/'><Icon name='instagram' size='big' /></a>
        <h5>info@premierevaletparking.com</h5>
        <h5>Los Angeles and Ventura County: (323) 876-5816</h5>
        <h5>Orange County: (949) 497-8811</h5>
      </div>
    )
  }
}

export default Footer