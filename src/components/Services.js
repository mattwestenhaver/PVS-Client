import React from 'react'
import { Helmet } from "react-helmet";

import navOpacity from '../navBar.js'

class Services extends React.Component {

  componentDidMount() {
    navOpacity.changingMenuBar()
  }

  render() {
    return(
      <div className='services-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Our Services - Premiere Valet Services</title>
        </Helmet>
        <div className='services-header header-1'></div>
        <div className='services-section-1'>
          <div className='page-header'>
            <h1>OUR SERVICES</h1>
          </div><br />
          <div>
            <div className='header-2'>
              <h3>Private Parties</h3>
            </div>
            <p>Chances are you've seen us working in your neighborhood. Whether it's a small dinner party or a famous Hollywood Hills event, Premiere Valet is there. If we have not worked on your street recently, we will provide any necessary site visits to make sure your needs are met. We can even take care of any permit requirements your location may have.</p>
          </div>
          <div>
            <div className='header-2'>
              <h3>Businesses</h3>
            </div>
            <p>Let us help your business grow. Premiere Valet Service is well known for troubleshooting any parking situation. Whether you require Valet Service on a regular basis or a Parking Attendant to maximize your parking options, we want to meet with you. Contact us to set up a meeting with a representative to go over your options. We find ways to meet our clients needs while staying within their budget.</p>
          </div>
          <div>
            <div className='header-2'>
              <h3>Commercial Services</h3>
            </div>
            <p>Visit our location pages to view a few of our regular locations. We pride ourselves on the many locations where we are the Exclusive Valet Parking Company. If you have an event location, contact our events department to set up a meeting. Let our 20+ years of experience go to work for you and your event location.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Services