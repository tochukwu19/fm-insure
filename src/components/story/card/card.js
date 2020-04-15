/* eslint-disable react/prop-types */
import React from 'react';
import './card.css';

const card = (props) => {
  return (
    <div className="card">
      <img src={props.cardImage} alt={props.cardAlt} />
      <h2>{props.cardHeading}</h2>
      <p>{props.cardText}</p>
    </div>
  );
};

export default card;
