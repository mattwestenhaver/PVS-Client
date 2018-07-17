import React from 'react'

import navOpacity from '../navBar.js'

class AboutUs extends React.Component {

  componentDidMount() {
    navOpacity.changingMenuBar()
  }

  render() {
    return (
      <div className='about-container'>
        <div className='about-header header-1'>
          <h1>OUR STORY</h1>
        </div>
        <div className='about-section-1'>
          <div className='header-2'>
            <h2>Our Mission</h2>
          </div>
          <p>At Premiere Valet Parking Service we provide the Highest Standard of Private Valet Parking and Valet Parking Management Services. If you are looking for valet services in Los Angeles, Hollywood, Beverly Hills, Orange County, or Ventura County we are ready to meet your valet parking attendant needs.</p>
          <p>For over 25 years Premiere Valet Service, Inc., has served all of Southern California with valet parking service. With offices in Los Angeles and Laguna Beach we provide valet service with locally based valet parking attendants for all of Los Angeles County, Orange County, Ventura County  and Riverside County.</p>
          <p>Not all Los Angeles Valet Parking Companies are the same and we take pride in the level of Valet Parking Service we provide.  Our commitment to quality is why we are considered the Premiere Valet Company in Los Angeles, Malibu, Newport Coast, Laguna Beach, Orange County, etc.  Whether you are searching for a Beverly Hills Valet company to provide Beverly Hills Valet Parking Service or a Riverside Valet Company to provide Riverside Valet Parking Service, Premiere Valet Service is ready to assist with all of your valet parking needs.</p>
        </div>
      </div>
    )
  }
}

export default AboutUs