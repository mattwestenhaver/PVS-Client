import React from 'react'
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from 'react-toastify'
import { Form, Button } from 'semantic-ui-react';

import 'react-toastify/dist/ReactToastify.css';

class Quote extends React.Component {
  
  handleChange() {
    console.log('hi')
  }

  formSubmit() {
    if (this.refs.name.value === '' || this.refs.email.value === '' || this.refs.phone.value === '' || this.refs.address.value === '' || this.refs.city.value === '' || this.refs.zipcode.value === '' || this.refs.eventDate.value === '' || this.refs.eventType.value === '' || this.refs.guests.value === '' || this.refs.cars.value === '' || this.refs.arrival.value === '' || this.refs.departure.value === '' || this.refs.comments.value === '' || this.refs.reference.value === '') {
      toast.error('Please fill out all of the fields.', {
        position: toast.POSITION.TOP_CENTER
      })
    } else {
      toast.success('Your information has been submitted.', {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Request A Quote - Premiere Valet Service, Inc.</title>
        </Helmet>
        <div className='request-header'>
        </div>
        <div className='request-form-wrap'>
          <h2>Request A Quote</h2>
          <Form onSubmit={this.formSubmit.bind(this)} >

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
              <textarea ref='comments' rows='4' placeholder='What are the parking conditions like? Any other comments or questions?' />
            </Form.Field>

            <Form.Field>
              <input type='text' ref='reference' placeholder='How did you hear about us?' />
            </Form.Field>

            <Form.Field>
              <Button color='black' size='massive'>Submit</Button>
            </Form.Field>

            <ToastContainer />

          </Form>
        </div>
      </div>
    )
  }
}

export default Quote