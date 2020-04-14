import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/image-intro-desktop.jpg';
import bgPattern from '../../assets/images/bg-pattern-intro-right-desktop.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-one">
          <hr></hr>
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a>View plans</a>
        </div>
        <div className="hero-two">
          <img src={heroImage} alt="hero image"/>
        </div>
      </div>
      <img src={bgPattern} className="pattern" alt="pattern"/>
    </section>
  );
};

export default Hero;
