import React from 'react'
import { Helmet } from "react-helmet";


import navOpacity from '../navBar.js'

class AboutUs extends React.Component {

  componentDidMount() {
    navOpacity.changingMenuBar()
  }

  render() {
    return (
      <div className='about-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Our Story - Premiere Valet Services</title>
        </Helmet>
        <div className='about-header header-1'></div>
        <div className='about-section-1'>
          <div className='page-header'>
            <h1>ABOUT US</h1>
          </div><br />
          <div className='header-2'>
            <h3>Premiere Valet's Pledge</h3>
          </div>
          <p>While our business continues to grow each year, our objective has never changed: to provide the Highest Level of Service that exceeds our client expectations.</p>
          <div className='header-2'>
            <h3>Our Professional Parking Attendants</h3>
          </div>
          <p>We provide professional, well-groomed, uniformed Parking Attendants. Our staff consists of both male and female parking attendants.  All of our Valet Attendants have been trained to provide Superior Customer Service. We pride ourselves in the professionalism each and every one of our Valet Parking staff provide at our events.</p>
          <div className='header-2'>
            <h3>What Sets Us Apart</h3>
          </div>
          <p>Superior Customer Service has become a rare commodity in our industry. Here at Premiere Valet we answer our phones, we provide site visits, we work within our clients budget and we genuinely care about our clients. Simply contact us to experience the professionalism and hands-on attention you can only get from Premiere Valet Service Inc.</p>
        </div>
      </div>
    )
  }
}

export default AboutUs