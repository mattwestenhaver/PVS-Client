import React from 'react'
import { Helmet } from "react-helmet";
import blankImage from '../images/blank-user.jpg'
import ReactGA from 'react-ga'

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
    initGA()
    logPageView()
  }
  
  render() {
    return (
      <div className='staff-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Our Staff - Premiere Valet Services</title>
        </Helmet>
        <div className='staff-header header-1'>
          <h1>OUR STAFF</h1>
        </div>
        <div className='staff-section-1'>
          <div className='staff-wrap'>
            <div className='staff-image'>
              <img src={blankImage} alt='blank-user' />
            </div>
            <div className='staff-information'>
              <h2>David Allen</h2>
              <h3>Title</h3>
              <p>Bio here</p>
            </div>
          </div>
          <div className='staff-wrap'>
            <div className='staff-image'>
              <img src={blankImage} alt='blank-user' />
            </div>
            <div className='staff-information'>
              <h2>Ryan Petakoff</h2>
              <h3>Title</h3>
              <p>Bio here</p>
            </div>
          </div>
          <div className='staff-wrap'>
            <div className='staff-image'>
              <img src={blankImage} alt='blank-user' />
            </div>
            <div className='staff-information'>
              <h2>Mark Ramirez</h2>
              <h3>Title</h3>
              <p>Bio here</p>
            </div>
          </div>
          <div className='staff-wrap'>
            <div className='staff-image'>
              <img src={blankImage} alt='blank-user' />
            </div>
            <div className='staff-information'>
              <h2>Edward Alvarez</h2>
              <h3>Title</h3>
              <p>Bio here</p>
            </div>
          </div>
          <div className='staff-wrap'>
            <div className='staff-image'>
              <img src={blankImage} alt='blank-user' />
            </div>
            <div className='staff-information'>
              <h2>Steve Flores</h2>
              <h3>Title</h3>
              <p>Bio here</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Staff