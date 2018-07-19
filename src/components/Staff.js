import React from 'react'
import { Helmet } from "react-helmet";

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
          <p>need to be provided with staff info</p>
        </div>
      </div>
    )
  }
}

export default Staff