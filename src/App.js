import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/Navbar.js'
import Home from './components/Home.js'
import AboutUs from './components/AboutUs.js'
import Services from './components/Services.js'
import Insurance from './components/Insurance.js'
import Testimonials from './components/Testimonials.js'
import Staff from './components/Staff.js'
import Contact from './components/Contact.js'
import Quote from './components/Quote.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="App-Body">
            <Route exact path='/' component={Home} />
            <Route path='/about' component={AboutUs} />
            <Route path='/services' component={Services} />
            <Route path='/insurance' component={Insurance} />
            <Route path='/testimonials' component={Testimonials} />
            <Route path='/staff' component={Staff} />
            <Route path='/contact' component={Contact} />
            <Route path='/quote' component={Quote} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
