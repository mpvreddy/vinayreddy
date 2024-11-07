// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>© {new Date().getFullYear()} MP Vinay Reddy. All Rights Reserved.</p>
                <div style={styles.socials}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                        LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                        GitHub
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#0A2540',
        padding: '1.5rem 0',
        color: '#F7F9FB',
        textAlign: 'center',
        marginTop: 'auto',
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        marginBottom: '0.5rem',
    },
    socials: {
        display: 'flex',
        gap: '1rem',
    },
    link: {
        color: '#82CFFD',
        textDecoration: 'none',
    },
};

export default Footer;
