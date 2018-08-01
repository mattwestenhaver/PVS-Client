import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { toast, ToastContainer } from 'react-toastify'
import { Helmet } from "react-helmet";
import auth from '../auth.js'
import navOpacity from '../navBar.js'
import 'react-toastify/dist/ReactToastify.css';
import ReactGA from 'react-ga'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-122997893-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

const locationOptions = [
  {key: 0, text: 'Los Angeles County', value: 'Los Angeles County'},
  {key: 1, text: 'Ventura County', value: 'Ventura County'},
  {key: 2, text: 'Orange County', value: 'Orange County'},
  {key: 3, text: 'South Bay', value: 'South Bay'}
]

class Work extends React.Component {

  constructor() {
    super()
    this.state = {
      location: null
    }
  }

  workSubmit() {
    if (this.refs.firstName.value === '' || this.refs.lastName.value === '' || this.refs.email.value === '' || this.refs.phone.value === '' || this.refs.reference.value === '' || this.refs.education.value === '' || this.refs.skills.value === '' || this.refs.about.value === '' || this.refs.resume.value === '' || this.state.location === null) {
      toast.error('Please fill out all of the fields before submitting.', {
        position: toast.POSITION.TOP_CENTER
      })
    } else {
      const workData = {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value,
        reference: this.refs.reference.value,
        education: this.refs.education.value,
        skills: this.refs.skills.value,
        about: this.refs.about.value,
        resume: this.refs.resume.value,
        location: this.state.location
      }
      auth.workEmail(workData).then(success => {
        toast.success('Your information has been successfully submitted.', {
          position: toast.POSITION.TOP_CENTER
        })
        this.refs.firstName.value = ''
        this.refs.lastName.value = ''
        this.refs.email.value = ''
        this.refs.phone.value = ''
        this.refs.reference.value = ''
        this.refs.education.value = ''
        this.refs.skills.value = ''
        this.refs.about.value = ''
        this.refs.resume.value = ''
        this.setState({ location: null })
      })
    }
    
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  componentDidMount() {
    navOpacity.changingMenuBar()
    initGA()
    logPageView()
    auth.load().then(success => {
      console.log(success)
    })
  }

  render() {

    const { location } = this.state

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Employment - Premiere Valet Services, Inc.</title>
        </Helmet>
        <div className='work-header header-1'></div>
        <div className='work-section-1'>
          <div className='work-information'>
            <h3>To work with us you must meet the following requirements:</h3>
            <ul>
              <li>You MUST be at least 19 years of age</li>
              <li>Be able to operate a manual transmission (You will be tested)</li>
              <li>Possess a clean driving record</li>
            </ul>
            <p>All positions are part-time valet attendant roles, and it is required that you are available to work nights and weekends. The job can be physically demanding, and most of the time we are expected to work at night. We work in the cold, heat, rain, etc. Many jobs are located in the hills and you will be expected to run to and from the cars you are parking. There also may be extended periods of standing during a shift.</p>
            <h3>Please fill out the form below if you are interested in working with us.</h3>

            <div className='work-form-wrap'>

              <Form onSubmit={this.workSubmit.bind(this)}>

                <Form.Field>
                  <label>First Name</label>
                  <input type='text' ref='firstName' placeholder='John' />
                </Form.Field>

                <Form.Field>
                  <label>Last Name</label>
                  <input type='text' ref='lastName' placeholder='Smith' />
                </Form.Field>

                <Form.Field>
                  <label>Email Address</label>
                  <input type='text' ref='email' placeholder='example@gmail.com' />
                </Form.Field>

                <Form.Field>
                  <label>Cell Phone Number</label>
                  <input type='text' ref='phone' placeholder='(310) 555-1234' />
                </Form.Field>

                <Form.Field>
                  <label>How did you hear about us?</label>
                  <input type='text' ref='reference' placeholder="Put employee's name if an employee referred you" />
                </Form.Field>

                <Form.Field>
                  <label>Education Level</label>
                  <input type='text' ref='education' placeholder="High School, GED, etc." />
                </Form.Field>

                <Form.Field>
                  <label>Special Skills</label>
                  <input type='text' ref='skills' placeholder="List any skills you think we should know about" />
                </Form.Field>

                <Form.Field>
                  <label>Tell us about yourself</label>
                  <textarea ref='about' rows='4' placeholder="Put anything you think we should know" />
                </Form.Field>

                <Form.Field>
                  <Form.Select label='What location are you applying for?' name='location' value={location} options={locationOptions} placeholder='Choose Location' onChange={this.handleChange} />
                </Form.Field>

                <Form.Field>
                  <label>Copy and paste your resume below</label>
                  <textarea ref='resume' rows='4' placeholder="Resume here"/>
                </Form.Field>

                <Form.Field>
                  <Button color='black' size='massive'>Apply</Button>
                </Form.Field>

                <ToastContainer />

              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work