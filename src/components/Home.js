import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import navOpacity from '../navBar.js'
import logo from '../images/logo.png'

class Home extends React.Component {

  componentDidMount() {
    navOpacity.changingMenuBar()
  }

  render() {
    return (
      <div>
        <div className='home-section-1'>
          <img src={logo} alt='PVS Logo' /><br />
          <Link to='/quote'><Button color='black' size='massive'>Request A Quote</Button></Link>
        </div>
        <div className='home-section-2'>
          <p>At Premiere Valet Parking Service we provide the Highest Standard of Private Valet Parking and Valet Parking Management Services. If you are looking for a Los Angeles valet parking service, Hollywood valet parking service, Beverly Hills valet parking service, Orange County valet parking service, Ventura County valet parking service we are ready to meet your valet parking attendant needs.</p>
          <p>For over 25 years Premiere Valet Service, Inc., has served all of Southern California with valet parking service. With offices in Los Angeles and Laguna Beach we provide valet service with locally based valet parking attendants for all of Los Angeles County, Orange County , Ventura County  and Riverside County.  Our valet parking service provides both male and female valet parking attendants.</p>
          <p>Not all Los Angeles Valet Parking Companies are the same and we take pride in the level of Valet Parking Service we provide.  Our commitment to quality is why we are considered the Premiere Valet Company in Los Angeles, Malibu, Newport Coast, Laguna Beach, Orange County, etc.  Whether you are searching for a Beverly Hills Valet company to provide Beverly Hills Valet Parking Service or a Riverside Valet Company to provide Riverside Valet Parking Service Premiere Valet Service is ready to assist with all of your valet parking needs.</p>
        </div>
        <div className='home-section-3'>
          <div>
            <h3>We proudly provide Valet Parking Attendants for:</h3>
            <h4>Private Events:</h4>
            <ul>
              <li>Weddings</li>
              <li>Parties</li>
              <li>Dinners</li>
              <li>Fundraisers</li>
              <li>Other Special Events</li>
            </ul>
            <h4>Corporate Events:</h4>
            <ul>
              <li>Banquets</li>
              <li>Galas</li>
              <li>Concerts</li>
              <li>Seminars</li>
            </ul>
            <h4>Businesses:</h4>
            <ul>
              <li>Parking Lot Attendants</li>
              <li>Hotel Parking Management</li>
              <li>Restaurant Parking Management</li>
            </ul>
          </div>
          <div>
            <h4>image here</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Home