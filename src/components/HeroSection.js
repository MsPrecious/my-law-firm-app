import React from 'react';
import '../App.css'; 

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={require('../images/lawfirm_logo.png')} alt="Law Firm Logo" className="logo" />
      <div className="nav-buttons">
        <a href="src/components/IntroSection.js" className="nav-link">Home</a>
        <a href="src/components/IntroSection.js" className="nav-link">Attorneys</a>
        <a href="src/components/IntroSection.js" className="nav-link">Practice Areas</a>
        <a href="src/components/IntroSection.js" className="nav-link">About us</a>
      </div>
      <button className="contact-button">Contact Now</button>
      
    </div>
  );
};

export default HeroSection;
