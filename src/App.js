import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home';
import ServicesDetails from './Components/HomeServices/ServiceDetails';
import HomeServices from './Components/HomeServices/HomeServices';
import Services from './Components/Sevices/Services';
// import Team from './pages/Team';
// import Contact from './pages/Contact';
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop';
import OurTeam from './Components/Team/OurTeam';
import Contact from './Components/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicesDetails" element={<ServicesDetails />} />
        <Route path="/Homeservices" element={<HomeServices />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />



{/* 
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}
