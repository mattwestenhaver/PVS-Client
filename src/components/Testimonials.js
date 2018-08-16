import React from 'react'
import { Helmet } from "react-helmet";

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


class Testimonials extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
    // navOpacity.changingMenuBar()
    initGA()
    logPageView()
  }

  render() {
    return (
      <div className='testimonials-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Testimonials - Premiere Valet Services, Inc.</title>
        </Helmet>
        <div className='testimonials-header header-1'></div>
        <div className='testimonials-section-1'>
          <div className='page-header'>
            <hr/><h1>TESTIMONIALS</h1><hr/>
          </div><br />

          <div className='testimonials-column-1'>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>No matter the profile of the clients involved, or the number of last-minute strategies that needed to be put in place to make things work, Premiere Valet Services always came through and used their experience to create the perfect plan even as we were still gathering event information.</p>
              </blockquote>
              <cite>– Parking Services Manager, The Walt Disney Company</cite>
            </div>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>Thank you again for everything on this year’s gala.  By all accounts the valet was a hit.</p>
              </blockquote>
              <cite>– Director of Events, Hammer Museum</cite>
            </div>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>You [guys] are AMAZING! Thank you so much.</p>
              </blockquote>
              <cite>– Director of Events, California Science Center</cite>
            </div>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>Your team was wonderful and very on it. Please thank Adam again for me as well, he was great to work with.</p>
              </blockquote>
              <cite>– Mitie Tucker Event Production</cite>
            </div>
          </div>

          <div className='testimonials-column-2'>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>“We love working with your team—thank you for everything!!!”</p>
              </blockquote>
              <cite>– O’Gara Coach, The Gray Group</cite>
            </div>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>Thank you so much for you contribution to the pre-Grammy event. I always appreciate the professionalism that your staff displays.</p>
              </blockquote>
              <cite>– Best Events</cite>
            </div>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>As usual, when it comes to our valet service needs, we are grateful for the working relation ship that we continue to have with you and your company.</p>
              </blockquote>
              <cite>– An Original Occasion</cite>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Testimonials