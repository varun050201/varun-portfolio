import React from 'react';
import Navbar from './Navbar';
import './Projects.css';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="projects-content">
        <h1>Projects</h1>
        <p>Details about your projects.</p>
      </div>
    </div>
  );
};

export default Projects;