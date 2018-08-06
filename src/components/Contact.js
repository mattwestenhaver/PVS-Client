import React from 'react'
import { Button, Responsive } from 'semantic-ui-react'
import { Helmet } from "react-helmet";
import navOpacity from '../navBar.js'
import ReactGA from 'react-ga'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-122997893-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class Contact extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    // navOpacity.solidBar()
    initGA()
    logPageView()
  }

  scrollDown() {
    this.refs.section1.scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }
  
  render() {
    return(
      <div className='contact-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us - Premiere Valet Services, Inc.</title>
        </Helmet>
        <div className='contact-header'>
          <Responsive minWidth={769}>
            <Button color='black' size='massive' onClick={this.scrollDown.bind(this)}>CONTACT US</Button>
          </Responsive>
          <Responsive maxWidth={768}>
            <a className='mobile-contact-button' href="tel:+3238765816">CONTACT US</a>
          </Responsive>
        </div>
        <div ref='section1' className='contact-section-1'>
          <div className='contact-blurb'>
            <div className='header-2 centered'>
              <h3>Questions? Give Us A Call</h3>
            </div>
            <p>Our office is open Monday to Friday 9:00am - 5:30pm</p> 
            <p>We have a manager available and on call 24 hours a day, seven days a week.</p>
            <p>Los Angeles and Ventura County: (323) 876-5816</p>
            <p>Orange County: (949) 497-8811</p>
            <p>Email: info@premierevaletparking.com</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact