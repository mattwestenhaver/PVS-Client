import React from 'react'
import { Helmet } from "react-helmet";
import blankImage from '../images/blank-user.jpg'
import ReactGA from 'react-ga'

import Ryan from '../images/ryan-headshot.jpeg'
import Ed from '../images/ed-headshot.jpeg'
import Steve from '../images/steve-headshot.jpeg'
import Mark from '../images/mark-headshot.jpeg'
import David from '../images/david-headshot.jpeg'
import logo from '../images/logo-white.png'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-122997893-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class Staff extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    initGA()
    logPageView()
  }
  
  render() {
    return (
      <div className='staff-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Our Staff - Premiere Valet Services, Inc.</title>
        </Helmet>
        <div className='staff-header'>
          <img src={logo} alt='pvs white logo' />
        </div>
        <div className='staff-section-1'>
          <hr />
          <h1>Management Team</h1>
          <hr />
          <div className='staff-wrap'>
            <div className='staff-image'>
              <img src={David} alt='blank-user' />
            </div>
            <div className='staff-information'>
              <h2>David Allen</h2>
              <h3>Founder & President</h3>
              <p>David began his career managing transportation logistics right out of high school, when he joined the U.S. Air Force and served for 10 years as an Air Traffic Controller. After leaving the military, he went from directing pilots and planes to directing police and fire personnel as an emergency dispatcher for both the Long Beach and the Redondo Beach police departments. He founded Premiere Valet Services in 1988 and credits the leadership skills he gained through the military and his training as an emergency dispatcher for his success in building one of the largest and most trusted valet parking companies in Southern California. Today, Premiere Valet Services employs more than 200 people and has provided  parking services for several U.S. Presidents, countless celebrities, entertainment studios, fundraising galas — and even a canine wedding celebration.</p>
            </div>
          </div><hr />
          <div className='staff-wrap'>
            <div className='staff-image'>
              <img src={Mark} alt='blank-user' />
            </div>
            <div className='staff-information'>
              <h2>Mark Ramirez</h2>
              <h3>Controller</h3>
              <p>Mark has been in the valet industry for over 20 years and began with Premiere Valet Service in 1998 as a valet attendant while working his way through school at Pepperdine University in Malibu.  One year later, he joined the management team as the Controller.  Mark manages all the day-to-day finances for Premiere Valet Services and also manages events in the field.</p>
            </div>
          </div><hr />
          <div className='staff-wrap'>
            <div className='staff-image'>
              <img src={Ryan} alt='blank-user' />
            </div>
            <div className='staff-information'>
              <h2>Ryan Petakoff</h2>
              <h3>Operations Manager</h3>
              <p>Ryan joined the Premiere Valet Team in 2010 as a valet parking attendant while studying biochemistry at Cal State Fullerton. It was not until 2013 that he joined the Premiere Valet Service management team. Ryan oversees all day-to-day valet operations, sales and event management. </p>
            </div>
          </div><hr />
          <div className='staff-wrap'>
            <div className='staff-image'>
              <img src={Ed} alt='blank-user' />
            </div>
            <div className='staff-information'>
              <h2>Edward Alvarez</h2>
              <h3>Scheduling Manager</h3>
              <p>Edward has been with with Premiere Valet Service since 2012 when he started as a valet parking attendant. With his past scheduling experience which consisted of scheduling doctors at a large hospital, he was quickly promoted to Scheduling Manager where he coordinates the scheduling of the 200+ employees all throughout Southern California. Edward also manages special events in the field.</p>
            </div>
          </div><hr />
          <div className='staff-wrap'>
            <div className='staff-image'>
              <img src={Steve} alt='blank-user' />
            </div>
            <div className='staff-information'>
              <h2>Steve Flores</h2>
              <h3>Marketing Manager</h3>
              <p>Steve joined the Premiere Valet Team in 2014 after graduating from Cal State Long Beach. Steve was brought in full time to assist the company in its marketing efforts as the Marketing Manager. In addition to marketing, Steve also assists with event permits and works many events in the field.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Staff