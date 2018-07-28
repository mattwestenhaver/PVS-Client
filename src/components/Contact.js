import React from 'react'
import { Button } from 'semantic-ui-react'
import { Helmet } from "react-helmet";


import navOpacity from '../navBar.js'

class Contact extends React.Component {

  componentDidMount() {
    navOpacity.solidBar()
  }

  scrollDown() {
    this.refs.section1.scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }
  
  render() {
    return(
      <div className='contact-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us - Premiere Valet Service, Inc.</title>
        </Helmet>
        <div className='contact-header'>
          <Button color='black' size='massive' onClick={this.scrollDown.bind(this)}>CONTACT US</Button>
        </div>
        <div ref='section1' className='contact-section-1'>
          <div className='contact-blurb'>
            <div className='header-2 centered'>
              <h3>Questions? Give Us A Call</h3>
            </div>
            <p>Our office is open Monday to Friday 9:00am - 5:30pm</p> 
            <p>We have an on call manager 24 hours a day, seven days a week.</p>
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