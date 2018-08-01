import React from 'react'
import { Helmet } from "react-helmet";
import navOpacity from '../navBar.js'
import insurance from '../images/insurance2.jpg'
import ReactGA from 'react-ga'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-122997893-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class Insurance extends React.Component {

  componentDidMount() {
    navOpacity.changingMenuBar()
    initGA()
    logPageView()
  }

  render() {
    return (
      <div className='insurance-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Insurance - Premiere Valet Services, Inc.</title>
        </Helmet>
        <div className='insurance-header header-1'></div>
        <div className='insurance-section-1'>
          <div className='page-header'>
            <h1>INSURANCE</h1>
          </div><br />
          <p>Premiere Valet Services, Inc., has been in business for over 30 years. While we consider ourselves to be the best valet parking company in the business, our pricing remains competitive with that of other companies with far less experience and who are not able to offer the level of insurance we provide our clients.</p> 
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