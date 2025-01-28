import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Insurance from './components/Insurance';
import Testimonials from './components/Testimonials';
import Staff from './components/Staff';
import Contact from './components/Contact';
import Quote from './components/Quote';
import QuoteConfirmation from './components/QuoteConfirmation';
import Footer from './components/Footer';
import City from './components/City';
import Work from './components/Work';
import Quotes from './components/Quotes';

const App = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="App-Body">
                    <Routes>
                        {/* Routes */}
                        <Route index path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/insurance" element={<Insurance />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/staff" element={<Staff />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/quote" element={<Quote />} />
                        <Route path="/confirmation" element={<QuoteConfirmation />} />
                        <Route path="/employment" element={<Work />} />
                        <Route path="/view-quotes" element={<Quotes />} />
                        <Route path="/losangeles" element={<City city="Los Angeles" />} />
                        <Route path="/pasadena" element={<City city="Pasadena" />} />
                        <Route path="/sanmarino" element={<City city="San Marino" />} />
                        <Route path="/lacanada" element={<City city="La Canada Flintridge" />} />
                        <Route path="/brentwood" element={<City city="Brentwood" />} />
                        <Route path="/palisades" element={<City city="Pacific Palisades" />} />
                        <Route path="/santamonica" element={<City city="Santa Monica" />} />
                        <Route path="/hollywood" element={<City city="Hollywood" />} />
                        <Route path="/beverlyhills" element={<City city="Beverly Hills" />} />
                        <Route path="/beverlypark" element={<City city="Beverly Park" />} />
                        <Route path="/belair" element={<City city="Bel Air" />} />
                        <Route path="/malibu" element={<City city="Malibu" />} />
                        <Route path="/hiddenhills" element={<City city="Hidden Hills" />} />
                        <Route path="/thousandoaks" element={<City city="Thousand Oaks" />} />
                        <Route path="/westlakevillage" element={<City city="Westlake Village" />} />
                        <Route path="/northranch" element={<City city="North Ranch" />} />
                        <Route path="/lagunabeach" element={<City city="Laguna Beach" />} />
                        <Route path="/newportcoast" element={<City city="Newport Coast" />} />
                        <Route path="/emeraldbay" element={<City city="Emerald Bay" />} />
                        <Route path="/irvine" element={<City city="Irvine" />} />
                        <Route path="/coronadelmar" element={<City city="Corona del Mar" />} />
                        <Route path="/cotodecaza" element={<City city="Coto de Caza" />} />
                        <Route path="/newportbeach" element={<City city="Newport Beach" />} />
                        <Route path="/pelicanhill" element={<City city="Pelican Hill" />} />
                        <Route path="/danapoint" element={<City city="Dana Point" />} />
                        <Route path="/manhattanbeach" element={<City city="Manhattan Beach" />} />
                        <Route path="/palosverdes" element={<City city="Palos Verdes" />} />
                        <Route path="/rollinghills" element={<City city="Rolling Hills" />} />
                        <Route path="/longbeach" element={<City city="Long Beach" />} />

                        {/* Redirects */}
                        <Route path="/valet_parking_services.html" element={<Navigate replace to="/losangeles" />} />
                        <Route path="/pasadena_valet_parking.html" element={<Navigate replace to="/pasadena" />} />
                        <Route
                            path="/la_canada_flintridge_valet_parking.html"
                            element={<Navigate replace to="/lacanada" />}
                        />
                        <Route path="/brentwood_valet_parking.html" element={<Navigate replace to="/brentwood" />} />
                        <Route
                            path="/pacific_palisades_valet_parking.html"
                            element={<Navigate replace to="/palisades" />}
                        />
                        <Route
                            path="/beverly_hills_valet_parking.html"
                            element={<Navigate replace to="/beverlyhills" />}
                        />
                        <Route path="/bel_air_valet_parking.html" element={<Navigate replace to="/belair" />} />
                        <Route path="/malibu_valet_parking.html" element={<Navigate replace to="/malibu" />} />
                        <Route
                            path="/thousand_oaks_valet_parking.html"
                            element={<Navigate replace to="/thousandoaks" />}
                        />
                        <Route
                            path="/westlake_village_valet_parking.html"
                            element={<Navigate replace to="/westlakevillage" />}
                        />
                        <Route path="/north_ranch_valet_parking.html" element={<Navigate replace to="/northranch" />} />
                        <Route
                            path="/laguna_beach_valet_parking.html"
                            element={<Navigate replace to="/lagunabeach" />}
                        />
                        <Route path="/emerald_bay_valet_parking.html" element={<Navigate replace to="/emeraldbay" />} />
                        <Route
                            path="/newport_beach_valet_parking.html"
                            element={<Navigate replace to="/newportbeach" />}
                        />
                        <Route
                            path="/pelican_hill_valet_parking.html"
                            element={<Navigate replace to="/pelicanhill" />}
                        />
                        <Route path="/dana_point_valet_parking.html" element={<Navigate replace to="/danapoint" />} />
                        <Route
                            path="/manhattan_beach_valet_parking.html"
                            element={<Navigate replace to="/manhattanbeach" />}
                        />
                        <Route
                            path="/palos_verdes_valet_parking.html"
                            element={<Navigate replace to="/palosverdes" />}
                        />
                        <Route path="/long_beach_valet_parking.html" element={<Navigate replace to="/longbeach" />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
