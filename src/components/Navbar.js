import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleHomeClick = () => {
    const homePage = document.getElementById('home-page');
    if (homePage) {
      homePage.classList.add('launch-animation');
      setTimeout(() => {
        homePage.classList.remove('launch-animation');
      }, 3000); // Duration of the animation
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;