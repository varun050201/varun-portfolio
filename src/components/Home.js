import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

const Home = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      document.body.style.setProperty('--mouse-x', `${xPercent}%`);
      document.body.style.setProperty('--mouse-y', `${yPercent}%`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // GSAP animations
    gsap.fromTo('.glass-card', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
    gsap.fromTo('.arrow-link', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: 'power2.out' });

    // ScrollMagic animations
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: '.glass-card',
      triggerHook: 0.9,
      reverse: false
    })
      .setTween(gsap.fromTo('.glass-card', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }))
      .addTo(controller);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="home-page" className="home-page">
      <Navbar />
      <div className="home-content">
        <div className="glass-card">
          <h1 className="animated-title">Varun Korlpati</h1>
          <p className="animated-subtitle">I am a Full Stack Developer</p>
        </div>
        <Link to="/about" className="arrow-link">
          <div className="arrow">&#x2192;</div>
        </Link>
      </div>
      <div className="space-shuttle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="stars"></div>
    </div>
  );
};

export default Home;
