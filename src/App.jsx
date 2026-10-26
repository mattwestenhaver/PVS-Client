import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Insurance from './pages/Insurance';
import Testimonials from './pages/Testimonials';
import Staff from './pages/Staff';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import QuoteConfirmation from './pages/QuoteConfirmation';
import Employment from './pages/Employment';
import City from './pages/City';
import { cities } from './data/cities';

const App = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="App-Body">
                    <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/insurance" element={<Insurance />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/staff" element={<Staff />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/quote" element={<Quote />} />
                        <Route path="/confirmation" element={<QuoteConfirmation />} />
                        <Route path="/employment" element={<Employment />} />

                        {/* City pages, plus redirects from the old site's .html URLs (see data/cities.js) */}
                        {cities.map(city => (
                            <Route key={city.path} path={city.path} element={<City key={city.path} city={city} />} />
                        ))}
                        {cities
                            .filter(city => city.legacyPath)
                            .map(city => (
                                <Route
                                    key={city.legacyPath}
                                    path={city.legacyPath}
                                    element={<Navigate replace to={city.path} />}
                                />
                            ))}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
