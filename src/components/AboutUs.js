import React from 'react'
import { Helmet } from "react-helmet";
// import navOpacity from '../navBar.js'
import ReactGA from 'react-ga'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-122997893-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class AboutUs extends React.Component {

  componentDidMount() {
    // navOpacity.changingMenuBar()
    initGA()
    logPageView()
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div ref='top' className='about-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="keywords" content="valet parking los angeles, los angeles valet, valet parking, laguna beach valet, parking attendants, beverly hills valet, orange county valet parking, valet company los angeles, valet parking service" />
          <title>Our Story - Premiere Valet Services, Inc.</title>
        </Helmet>
        <div className='about-header header-1'></div>
        <div className='about-section-1'>
          <div className='page-header'>
            <h1>ABOUT US</h1>
          </div><br />
          <div className='header-2'>
            <h3>Premiere Valet's Pledge</h3>
          </div>
          <p>While our business continues to grow each year, our objective has never changed: to provide the highest level of valet parking service that always exceeds our client’s expectation.</p>
          <div className='header-2'>
            <h3>Our Professional Attendants</h3>
          </div>
          <p>We provide professional, well-groomed, uniformed valet parking attendants. Our staff consists of both male and female valet parking attendants. All of our valet parking attendants have been trained to provide superior customer service. We pride ourselves in the professionalism each and every one of our valet parking attendants provide at your events.</p>
          <div className='header-2'>
            <h3>What Sets Us Apart</h3>
          </div>
          <p>Superior customer service has become a rare commodity in our industry. Here at Premiere Valet Services, Inc., we answer our phones, we provide site visits, we work within our clients budget and we genuinely care about our clients. Simply contact us to experience the professionalism and hands-on attention you can only get from Premiere Valet Services, Inc.</p>
        </div>
      </div>
    )
  }
}

export default AboutUs