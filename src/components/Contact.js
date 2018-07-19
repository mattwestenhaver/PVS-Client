import React from 'react'
import { Form, Button } from 'semantic-ui-react'

import navOpacity from '../navBar.js'

class Contact extends React.Component {

  componentDidMount() {
    navOpacity.solidBar()
  }
  
  render() {
    return(
      <div className='contact-container'>
        <div className='contact-blurb'>
          <h2>Contact Information</h2>
          <h4>We are open Monday - Friday 8:30am - 5:30pm</h4> 
          <p>We have a manager on call 24 hours a day, seven days a week, so let us know how we can help!</p>
          <p>Los Angeles: (323) 876-5816</p>
          <p>Orange County: (949) 497-8811</p>
          <p>Ventura County: (818) 992-0022</p>
          <p>Fax: (323) 876-5882</p>
          <p>Email: info@premierevaletparking.com</p>
        </div>
      </div>
    )
  }
}

export default Contact