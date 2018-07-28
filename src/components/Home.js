import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { Helmet } from "react-helmet";
import $ from 'jquery'

import navOpacity from '../navBar.js'
import logo from '../images/logo.png'
import section3Image from '../images/pvs-5.jpg'

class Home extends React.Component {

  componentDidMount() {
    navOpacity.changingMenuBar()
    navOpacity.hideLogo()
    setTimeout(() => {
      $('.home-section-1 img').fadeOut()
    }, 3000)
    setTimeout(() => {
      $('.home-section-1 .ui.white.button').fadeIn()
    }, 3000)
    setTimeout(() => {
      $('.home-section-1').addClass('home-picture-fade')
    }, 3200)
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Premiere Valet Service, Inc.</title>
        </Helmet>
        <div className='home-section-1'>
          <img src={logo} alt='PVS Logo' /><br />
          <Link to='/quote'><Button color='white' size='massive'>Request A Quote</Button></Link>
        </div>
        <div className='home-section-2'>
          <p>Premiere Valet Service, Inc., provides the Highest Standard of Private Valet Parking and Valet Parking Management Services. If you are looking for a Los Angeles valet parking services, Hollywood valet parking services, Beverly Hills valet parking services, Orange County valet parking services or Ventura County valet parking services we are ready to meet your valet parking service needs.</p>
          <p>For over 30 years Premiere Valet Service, Inc., has served all of Southern California with the highest quality of valet parking service. With offices in Los Angeles and Laguna Beach we provide valet parking service with locally based valet parking attendants in Los Angeles County, Orange County , Ventura County. Our valet parking service provides both male and female valet parking attendants.</p>
          <p>Not all Los Angeles valet parking companies are the same and we take pride in the level of valet parking service we provide.  Our commitment to quality is why we are considered the Premiere valet Company in Los Angeles, Beverly Hills, Malibu, Thousand Oaks, Newport Coast, Laguna Beach, Orange County, etc.</p>
          <p>Whether you are searching for a Beverly Hills valet parking company to provide Beverly Hills valet parking service or a Thousand Oaks valet parking company to provide Thousand Oaks Valet Parking Service, Premiere Valet Service, Inc., is ready to assist with all of your valet parking needs.</p>
          <hr />
        </div>
        <div className='home-section-3'>
          <div>
            <div className='header-2'>
              <h3>We Proudly Provide Valet Parking For:</h3>
            </div>
            <h4>Private Events:</h4>
            <ul>
              <li>Weddings</li>
              <li>Private Parties</li>
              <li>Private Dinners</li>
              <li>Fundraisers</li>
              <li>Other Special Events</li>
            </ul>
            <h4>Corporate Events:</h4>
            <ul>
              <li>Banquets</li>
              <li>Galas</li>
              <li>Seminars</li>
            </ul>
            <h4>Businesses:</h4>
            <ul>
              <li>Parking Lot Attendants</li>
              <li>Hotel Parking Management</li>
              <li>Concert & Festival Parking Management</li>
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