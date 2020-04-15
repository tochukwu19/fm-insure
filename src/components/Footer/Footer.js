import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.svg';
import Facebook from '../../assets/images/icon-facebook.svg';
import Twitter from '../../assets/images/icon-twitter.svg';
import Pinterest from '../../assets/images/icon-pinterest.svg';
import Instagram from '../../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-head">
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="socials">
            <img src={Facebook} alt="Facebook"/>
            <img src={Twitter} alt="Twitter"/>
            <img src={Pinterest} alt="Pinterest"/>
            <img src={Instagram} alt="Instagram"/>
          </div>
        </div>
        <hr className="footHr"></hr>
        <div className="footmenus">
          <div className="footmenu">
            <h3>Our company</h3>
            <li>How we work</li>
            <li>Why Insure ?</li>
            <li>View plans</li>
            <li>Reviews</li>
          </div>
          <div className="footmenu">
            <h3>Help me</h3>
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookies</li>
          </div>
          <div className="footmenu">
            <h3>Contact</h3>
            <li>Sales</li>
            <li>Support</li>
            <li>Live chat</li>
          </div>
          <div className="footmenu">
            <h3>Others</h3>
            <li>Careers</li>
            <li>Press</li>
            <li>Licences</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
