/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default layout;
