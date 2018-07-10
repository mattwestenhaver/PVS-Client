import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/Navbar.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <h1>Premiere Valet Services</h1>
        </div>
      </Router>
    );
  }
}

export default App;
