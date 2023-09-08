// src/components/IntroSection.js

import React from 'react';
import '../App.css';
import lawyerImage from '../images/lawyer.png';

const IntroSection = () => {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <p className="intro-message">
          You don’t have to<br />
          Fight them Alone.
        </p>
        <p className="studio-description">
          At IGSTUDIO, we are more than just attorneys;<br />
          we are dedicated advocates who navigate the complex<br />
          labyrinth of the legal world to protect your rights and interests.<br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </p>
        <div className="email-input-container">
        <input
          type="email"
          placeholder="Enter your email address"
          className="email-input"
        />
        <button className="lets-talk-button">Let's Talk</button>
      </div>
      </div>
      <div className="lawyer-image-container">
        <img src={lawyerImage} alt="Lawyer" className="lawyer-image" />
      </div>
    </div>
  );
};

export default IntroSection;
