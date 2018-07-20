import React from 'react'
import { Helmet } from "react-helmet";

import blankImage from '../images/blank-user.jpg'

class Staff extends React.Component {
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