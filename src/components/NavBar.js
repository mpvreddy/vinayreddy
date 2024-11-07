// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <h2 style={styles.title}>Vinay Kumar Reddy Patil</h2>
            <div style={styles.links}>
                <Link to="/" style={styles.link}>About</Link>
                <Link to="/projects" style={styles.link}>Projects</Link>
                <Link to="/case-studies" style={styles.link}>Case Studies</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#0A2540',
        color: '#FFF',
    },
    title: {
        fontSize: '1.5rem',
    },
    links: {
        display: 'flex',
        gap: '1rem',
    },
    link: {
        color: '#82CFFD',
        textDecoration: 'none',
    }
};

export default Navbar;
