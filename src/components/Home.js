import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { Helmet } from "react-helmet";
import $ from 'jquery'

import navOpacity from '../navBar.js'
import logo from '../images/logo-white.png'
import section3Image from '../images/aston-martin.jpg'
import newBG from '../images/fence-crop-3.jpg'

import ReactGA from 'react-ga'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-122997893-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    initGA()
    logPageView()
    // navOpacity.changingMenuBar()
    // navOpacity.hideLogo()
    setTimeout(() => {
      $('.home-section-1 img').fadeOut()
    }, 3000)
    setTimeout(() => {
      $('.home-section-1 .ui.grey.button').css('opacity', '1')
    }, 5200)
    setTimeout(() => {
      $('.home-section-1').stop().addClass('home-picture-fade')
    }, 3400)
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Premiere Valet Services, Inc.</title>
        </Helmet>
        <div className='home-section-1'>
          <img src={logo} alt='PVS Logo' /><br />
          <Link to='/quote'><Button color='grey' size='massive'>Request A Quote</Button></Link>
        </div>
        <div className='home-section-2'>
          <p>Premiere Valet Services, Inc., provide the highest standard of private valet parking and valet parking management services. We provide private valet parking service to private events as little as 25-30 guests to large events at movie studios and industry events for 1,000’s of guests. If you are looking for a Los Angeles valet parking services, Hollywood valet parking services, Beverly Hills valet parking services, Orange County valet parking services or Ventura County valet parking services we are ready to meet your valet parking service needs.</p>
          <p>For over 30 years Premiere Valet Services, Inc., has served all of Southern California with the highest quality of valet parking service. With offices in Los Angeles and Laguna Beach we provide valet parking service with locally based valet parking attendants in Los Angeles County, Orange County , Ventura County. Our valet parking service provides both male and female valet parking attendants.</p>
          <p>Not all Los Angeles valet parking companies are the same and we take pride in the level of valet parking service we provide.  Our commitment to quality is why we are considered the Premiere valet Company in Los Angeles, Beverly Hills, Malibu, Thousand Oaks, Newport Coast, Laguna Beach, Orange County, etc.</p>
          <p>Whether you are searching for a Beverly Hills valet parking company to provide Beverly Hills valet parking service or a Thousand Oaks valet parking company to provide Thousand Oaks Valet Parking Service, Premiere Valet Services, Inc., is ready to assist with all of your valet parking needs.</p>
          <hr />
        </div>
        <div className='home-section-3'>
          <div>
            <div className='header-2'>
              <h3>We Proudly Provide Valet Parking For:</h3>
            </div>
            <h4>Private Events:</h4>
            <ul>
              <li>Wedding Valet Parking</li>
              <li>Private Party Valet Parking</li>
              <li>Private Dinner Valet Parking</li>
              <li>Fundraiser Valet Parking</li>
              <li>Other Special Events</li>
            </ul>
            <h4>Corporate Events:</h4>
            <ul>
              <li>Banquet Valet Parking</li>
              <li>Gala Valet Parking</li>
              <li>Seminar Valet Parking</li>
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
        <div className='home-section-4'>
          <Link to='/quote'><Button className='request-home-2' color='grey' size='massive'>Request A Quote</Button></Link>
        </div>
      </div>
    )
  }
}

export default Home