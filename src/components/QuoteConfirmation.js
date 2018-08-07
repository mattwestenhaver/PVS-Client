import React from 'react'
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet";

import logo from '../images/logo-white.png'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-122997893-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class QuoteConfirmation extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    initGA()
    logPageView()
  }

  render() {
    return (
      <div className='confirmation-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Thank You - Premiere Valet Services, Inc.</title>
        </Helmet>
        <img src={logo} alt='logo' />
        <h3>Thank you for choosing Premiere Valet Services, Inc. for your next event!</h3>
        <h3>We will get back to you as soon as possible.</h3>
      </div>
    )
  }
}

export default QuoteConfirmation