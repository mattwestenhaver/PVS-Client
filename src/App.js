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
import City from './components/City.js'

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

            <Route path='/losangeles' render={(props) => {
              return <City city='Los Angeles' {...props} />
            }} />
            <Route path='/pasadena' render={(props) => {
              return <City city='Pasadena' {...props} />
            }} />
            <Route path='/sanmarino' render={(props) => {
              return <City city='San Marino' {...props} />
            }} />
            <Route path='/lacanada' render={(props) => {
              return <City city='La Canada Flintridge' {...props} />
            }} />
            <Route path='/brentwood' render={(props) => {
              return <City city='Brentwood' {...props} />
            }} />
            <Route path='/palisades' render={(props) => {
              return <City city='Pacific Palisades' {...props} />
            }} />

            <Route path='/hollywood' render={(props) => {
              return <City city='Hollywood' {...props} />
            }} />
            <Route path='/beverlyhills' render={(props) => {
              return <City city='Beverly Hills' {...props} />
            }} />
            <Route path='/beverlypark' render={(props) => {
              return <City city='Beverly Park' {...props} />
            }} />
            <Route path='/belair' render={(props) => {
              return <City city='Bel Air' {...props} />
            }} />
            <Route path='/malibu' render={(props) => {
              return <City city='Malibu' {...props} />
            }} />

            <Route path='/hiddenhills' render={(props) => {
              return <City city='Hidden Hills' {...props} />
            }} />
            <Route path='/thousandoaks' render={(props) => {
              return <City city='Thousand Oaks' {...props} />
            }} />
            <Route path='/westlakevillage' render={(props) => {
              return <City city='Westlake Village' {...props} />
            }} />
            <Route path='/northranch' render={(props) => {
              return <City city='North Ranch' {...props} />
            }} />

            <Route path='/lagunabeach' render={(props) => {
              return <City city='Laguna Beach' {...props} />
            }} />
            <Route path='/newportcoast' render={(props) => {
              return <City city='Newport Coast' {...props} />
            }} />
            <Route path='/emeraldbay' render={(props) => {
              return <City city='Emerald Bay' {...props} />
            }} />
            <Route path='/irvine' render={(props) => {
              return <City city='Irvine' {...props} />
            }} />
            <Route path='/coronadelmar' render={(props) => {
              return <City city='Corona del Mar' {...props} />
            }} />
            <Route path='/cotodecaza' render={(props) => {
              return <City city='Coto de Caza' {...props} />
            }} />
            <Route path='/newportbeach' render={(props) => {
              return <City city='Newport Beach' {...props} />
            }} />
            <Route path='/pelicanhill' render={(props) => {
              return <City city='Pelican Hill' {...props} />
            }} />
            <Route path='/danapoint' render={(props) => {
              return <City city='Dana Point' {...props} />
            }} />

            <Route path='/manhattanbeach' render={(props) => {
              return <City city='Manhattan Beach' {...props} />
            }} />
            <Route path='/palosverdes' render={(props) => {
              return <City city='Palos Verdes' {...props} />
            }} />
            <Route path='/rollinghills' render={(props) => {
              return <City city='Rolling Hills' {...props} />
            }} />
            <Route path='/longbeach' render={(props) => {
              return <City city='Long Beach' {...props} />
            }} />
            


          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
