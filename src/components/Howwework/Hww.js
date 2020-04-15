import React from 'react';
import './Hww.css';
import svgH from '../../assets/images/bg-pattern-how-we-work-desktop.svg';

const Hww = () => {
  return (
    <div className="hww">
      <div className="hww-container">
        <div className="hwww">
          <h1>Find out more about how we work</h1>
        </div>
        <div>
          <a>How we work</a>
          <img src={svgH} alt="an svg" className="svgH"/>
        </div>
      </div>
    </div>
  );
};

export default Hww;
