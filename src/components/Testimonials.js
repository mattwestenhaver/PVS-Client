import React from 'react'
import { Helmet } from "react-helmet";

import navOpacity from '../navBar.js'


class Testimonials extends React.Component {
  
  componentDidMount() {
    navOpacity.changingMenuBar()
  }

  render() {
    return (
      <div className='testimonials-container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Testimonials - Premiere Valet Services</title>
        </Helmet>
        <div className='testimonials-header header-1'>
          <h1>TESTIMONIALS</h1>
        </div>
        <div className='testimonials-section-1'>

          <div className='testimonials-column-1'>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>Your valets were professional, courteous, and expeditious.</p>
              </blockquote>
              <cite>– Silver Star Automotive Group</cite>
            </div>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>The engagers were blown away at the level of service...  Your hard work, dedication and commitment to excellence really made the difference.</p>
              </blockquote>
              <cite>– Edward C Moses-Granger - Sherwood Country Club</cite>
            </div>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>We thank you for you flexibility, positive attitude and obvious experience. It was truly a pleasure to work with you.</p>
              </blockquote>
              <cite>– Merv Griffin Productions</cite>
            </div>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>Our sincerest appreciation for your wonderful staff, they are number one.</p>
              </blockquote>
              <cite>– Rabin Rodgers - Event Producers</cite>
            </div>
          </div>

          <div className='testimonials-column-2'>
            <div className='testimonial-wrap'>
              <blockquote>
                  <p>As always, your guys did a wonderful job. Thank you for your hard work and consistency.</p>
              </blockquote>
              <cite>– Harrison & Schriftman - Public Relations</cite>
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