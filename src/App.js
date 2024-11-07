// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';  // if the file is named NavBar.js
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
