import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
// import navOpacity from '../navBar.js'
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
    window.scrollTo(0, 0)
    // navOpacity.solidBar()
    initGA()
    logPageView()
  }

  render() {

    const helmetData = `${this.props.city} Valet Parking, Valet Parking ${this.props.city}, ${this.props.city} Valet Service, Valet Service ${this.props.city}, ${this.props.city} Valet, Valet Service, Valet Attendants ${this.props.city}`

    return(
      <div className='city-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={helmetData} />
          <title>{this.props.city} - Premiere Valet Services, Inc.</title>
        </Helmet>
        <div className='city-section-1 header-1'></div>
        <div className='city-section-2'>
          <hr/><h1>{this.props.city} Valet Services</h1><hr/>
          <p>There are many {this.props.city} Valet Companies, but Premiere Valet Services, Inc. is proudly the number one in {this.props.city}. If you are hosting an event in {this.props.city} and need valet, Premiere Valet Services, Inc. can offer you first class valet services and a level of service that no other valet company in the area can.</p>
          <p>With over 30 years in the valet business, Premiere Valet Services, Inc. is the number one valet service in all of Southern California. We are the first choice valet company for all private events; from pre-Oscar private parties to small home gatherings. Parking in {this.props.city} can be difficult, but with Premiere Valet Services, Inc. you and your guests can enjoy your next private event with peace of mind.</p>
          <p>Our <span className='italic'>premiere</span> valet parking staff is the most qualified, experienced and reliable valet parking staff you will find in any {this.props.city} valet company. Contact us any time at 
          {this.props.city === "Irvine" || this.props.city === "Laguna Beach" || this.props.city === "Newport Coast" || this.props.city === "Newport Beach" || this.props.city === "Emerald Bay" || this.props.city === "Corona del Mar" || this.props.city === "Coto de Caza" || this.props.city === "Pelican Hill" || this.props.city === "Dana Point" 
            ? <a href='tel:+19494978811'> (949) 497-8811 </a> 
            : <a href='tel:+13238765816'> (323) 876-5816 </a>
          } 
          or click <Link to='/quote'>here</Link> and let us make the best of your next valet parking experience.</p>
        </div>
      </div>
    )
  }
}

export default City