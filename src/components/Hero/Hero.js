import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/image-intro-desktop.jpg';

const Hero = () => {
  return (
    <React.Fragment>
      <div className="hero-mob">

      </div>
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
            <a href=".">View plans</a>
          </div>
          <div className="hero-two">
            <img src={heroImage} alt="hero" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
