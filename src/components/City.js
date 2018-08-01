import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import navOpacity from '../navBar.js'
import ReactGA from 'react-ga'

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-122997893-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class City extends React.Component {

  componentDidMount() {
    navOpacity.solidBar()
    initGA()
    logPageView()
  }

  render() {
    return(
      <div className='city-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.city} - Premiere Valet Services, Inc.</title>
        </Helmet>
        <div className='city-section-1'>
          <h1>{this.props.city} Valet Services</h1>
          <p>There are many {this.props.city} Valet Companies, but Premiere Valet Services, Inc. is proudly the number one in {this.props.city}. If you are hosting an event in {this.props.city} and need valet, Premiere Valet Services, Inc. can offer you first class valet services and a level of service that no other valet company in the area can.</p>
          <p>With over 25 years in the valet business, Premiere Valet Services, Inc. is the number one valet service in all of Southern California. We are the first choice valet company for all private events; from pre-Oscar private parties to small home gatherings. Parking in {this.props.city} can be difficult, but with Premiere Valet Services, Inc. you and your guests can enjoy your next private event with peace of mind.</p>
          <p>Our <span className='italic'>premiere</span> valet parking staff is the most qualified, experienced and reliable valet parking staff you will find in any {this.props.city} valet company. Contact us any time at (323) 876-5816 or click <Link to='/quote'>here</Link> and let us make the best of your next valet parking experience.</p>
        </div>
      </div>
    )
  }
}

export default City