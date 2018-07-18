import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class Contact extends React.Component {

  // handleSubmit() {
  //   console.log('submitted...')
  // }

  render() {
    return(
      <div className='contact-container'>
        <div className='contact-blurb'>
          <h2>Contact Us</h2>
          <p>We are open Monday - Friday 8:30am - 5:30pm</p> 
          <p>We have a manager on call 24 hours a day, seven days a week, and we love questions, so let us know how we can help!</p>
        </div>
        <div className='contact-form-wrap'>

          {/* <Form className='contact-form' onSubmit={this.handleSubmit.bind(this)} >
            <Form.Field>
              <input type='text' ref='name' placeholder='Name' />
            </Form.Field>
            <Form.Field>
              <input type='text' ref='email' placeholder='Email Address' />
            </Form.Field>
            <Form.Field>
              <input type='text' ref='subject' placeholder='Subject' />
            </Form.Field>
            <Form.Field>
              <textarea ref='content' rows='4' placeholder='What is your question?' />
            </Form.Field>
            <Form.Field>
              <Button color='black' className='sign-up-button' size='big'>Submit</Button>
            </Form.Field>
          </Form> */}
        </div>
      </div>
    )
  }
}

export default Contact