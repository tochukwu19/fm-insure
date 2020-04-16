import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.svg';
import ham from '../../assets/images/icon-hamburger.svg';

const navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo"><img src={logo} alt="logo"/></div>
        <div className="menu">
          <li><a>How we work</a></li>
          <li><a>Blog</a></li>
          <li><a>Account</a></li>
          <li><a className="btn">View plans</a></li>
        </div>
        <div className="hamburger">
          <img src={ham} alt="hamburger" className="ham" />
        </div>
      </div>
    </nav>
  );
};

export default navbar;
