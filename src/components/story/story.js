/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './story.css';
import Card from './card/card';
import Spsvg from '../../assets/images/icon-snappy-process.svg';
import Apsvg from '../../assets/images/icon-affordable-prices.svg';
import Pfsvg from '../../assets/images/icon-people-first.svg';
import svg from '../../assets/images/bg-pattern-intro-left-desktop.svg';
import svg2 from '../../assets/images/bg-pattern-intro-right-mobile.svg';


const story = () => {
  return (
    <React.Fragment>
      <div className="story">
        <img src={svg} className="thesvg" />
        <img src={svg2} className="thesvg2" />
        <div className="story-container">
          <hr></hr>
          <h1>We're different</h1>
          <div className="cards">
            <Card cardImage={Spsvg} cardAlt="1st Card" cardHeading="Snappy Process" cardText="Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."/>
            <Card cardImage={Apsvg} cardAlt="2nd Card" cardHeading="Affordable Prices" cardText="We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible." />
            <Card cardImage={Pfsvg} cardAlt="3rd Card" cardHeading="People First" cardText="Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it." />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default story;
