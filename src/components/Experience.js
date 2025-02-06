import React from 'react';
import Navbar from './Navbar';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-page">
      <div className="experience-container">
        <div className="experience-item">
          <h2>CVS Health</h2>
          <p>Role: Full Stack Developer</p>
          <p>Duration: Jan 2020 - Present</p>
          <p>Responsibilities:</p>
          <ul>
            <li>Developed and maintained web applications using React and Node.js.</li>
            <li>Implemented RESTful APIs and integrated with frontend components.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h2>HCLTech</h2>
          <p>Role: Backend Developer</p>
          <p>Duration: Jan 2018 - Dec 2019</p>
          <p>Responsibilities:</p>
          <ul>
            <li>Designed and developed microservices using Spring Boot.</li>
            <li>Optimized database queries and improved application performance.</li>
            <li>Worked closely with frontend developers to integrate APIs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
