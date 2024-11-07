// src/pages/Projects.js
import React from 'react';

const Projects = () => (
    <section style={styles.section}>
        <h1>Projects</h1>
        <div>
            <h3>Project 1</h3>
            <p>Project description goes here.</p>
            <h3>Project 2</h3>
            <p>Project description goes here.</p>
        </div>
    </section>
);

const styles = {
    section: {
        padding: '2rem',
        color: '#0A2540',
    },
};

export default Projects;
