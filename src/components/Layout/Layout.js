/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Navbar from '../Navbar/Navbar';

const layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default layout;
