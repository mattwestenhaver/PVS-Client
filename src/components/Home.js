import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import {Helmet} from "react-helmet";

import navOpacity from '../navBar.js'
import logo from '../images/logo.png'
import section3Image from '../images/pvs-5.jpg'

class Home extends React.Component {

  componentDidMount() {
    navOpacity.changingMenuBar()
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Premiere Valet Services</title>
        </Helmet>
        <div className='home-section-1'>
          <img src={logo} alt='PVS Logo' /><br />
          <Link to='/quote'><Button color='black' size='massive'>Request A Quote</Button></Link>
        </div>
        <div className='home-section-2'>
          <p>At Premiere Valet Parking Service we provide the Highest Standard of Private Valet Parking and Valet Parking Management Services. If you are looking for valet services in Los Angeles, Hollywood, Beverly Hills, Orange County, or Ventura County we are ready to meet your valet parking attendant needs.</p>
          <p>For over 25 years Premiere Valet Service, Inc., has served all of Southern California with valet parking service. With offices in Los Angeles and Laguna Beach we provide valet service with locally based valet parking attendants for all of Los Angeles County, Orange County, Ventura County  and Riverside County.</p>
          <hr />
        </div>
        <div className='home-section-3'>
          <div>
            <div className='header-2'>
              <h3>We proudly provide Valet for:</h3>
            </div>
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
            <img src={section3Image} alt='' />
          </div>
        </div>
      </div>
    )
  }
}

export default Home