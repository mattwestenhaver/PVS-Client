import React from 'react'

import navOpacity from '../navBar.js'

import insurance from '../images/insurance.jpg'

class Insurance extends React.Component {

  componentDidMount() {
    navOpacity.changingMenuBar()
  }

  render() {
    return (
      <div className='insurance-container'>
        <div className='insurance-header header-1'>
          <h1>INSURANCE</h1>
        </div>
        <div className='insurance-section-1'>
          <p>Premiere Valet Service has been in operation for 25 years now.  While we consider ourselves to be the best in the business, our pricing remains competitive with that of other companies with far less experience and who are not able to offer the level of insurance we provide our clients.</p> 
          <p>Below is a copy of our current insurance certificate. We have every confidence that we can provide the level of customer service and insurance requirements that you need.</p>
        </div>
        <div className='insurance-section-2'>
          <div>
            <img src={insurance} alt='' />
          </div>
        </div>
      </div>
    )
  }
}

export default Insurance