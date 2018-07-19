import React from 'react'
import { Helmet } from "react-helmet";
import { Form, Button } from 'semantic-ui-react';

class Quote extends React.Component {
  
  handleChange() {
    console.log('hi')
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Request A Quote - Premiere Valet Services</title>
        </Helmet>
        <div className='request-header'>
        </div>
        <div className='request-form-wrap'>
          <h2>Request A Quote</h2>
          <Form>

            <Form.Field>
              <input type='text' ref='name' placeholder='Your Name' />
            </Form.Field>

            <Form.Field>
              <input type='text' ref='email' placeholder='Email Address' />
            </Form.Field>

            <Form.Field>
              <input type='text' ref='phone' placeholder='Phone Number' />
            </Form.Field>

            <Form.Field>
              <input type='text' ref='address' placeholder='Event Address' />
            </Form.Field>

            <Form.Group>
              <input type='text' ref='city' placeholder='City of Event' />
              <input type='number' ref='zipcode' placeholder='Event Zipcode' />
            </Form.Group>

            <Form.Group>
              <input type='text' ref='eventDate' placeholder='Date of Event' />
              <input type='text' ref='eventType' placeholder='Type of Event' />
            </Form.Group>

            <Form.Group>
              <input type='number' ref='guests' placeholder='Number of Guests' />
              <input type='number' ref='cars' placeholder='Number of Cars' />
            </Form.Group>

            <Form.Group>
              <input type='text' ref='arrival' placeholder='Guest Arrival Time' />
              <input type='text' ref='departure' placeholder='Guest Departure Time' />
            </Form.Group>

            <Form.Field>
              <textarea ref='comment' rows='4' placeholder='What are the parking conditions like? Any other comments or questions?' />
            </Form.Field>

            <Form.Field>
              <input type='text' ref='reference' placeholder='How did you hear about us?' />
            </Form.Field>

            <Form.Field>
              <Button className='sign-up-button' size='big'>Submit</Button>
            </Form.Field>

          </Form>
        </div>
      </div>
    )
  }
}

export default Quote