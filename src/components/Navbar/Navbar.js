/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.svg';
import ham from '../../assets/images/icon-hamburger.svg';
import close from "../../assets/images/icon-close.svg";

class Navbar extends Component {
  state = {
    navout: false
  }
  render() {

    return (
      <nav>
        <div className="nav-container">
          <div className="logo"><img src={logo} alt="logo"/></div>
          <div className="menu">
            <li><a href=".">How we work</a></li>
            <li><a href=".">Blog</a></li>
            <li><a href=".">Account</a></li>
            <li><a href="." className="btn">View plans</a></li>
          </div>
          <div className="hamburger" onClick={() => this.setState((prevState) => ({ navout: !prevState.navout}))}>
            { !this.state.navout ? <img src={ham} alt="hamburger" className="ham" /> : <img src={close} alt="hamburgerClose" className="hamC" />}
          </div>
        </div>
        <div className="mobileNav" style={{
          transform: this.state.navout ? "translateY(50%)" : "translateY(-100%)"
        }}>
          <div className="Mmenu">
            <li><a href=".">How we work</a></li>
            <li><a href=".">Blog</a></li>
            <li><a href=".">Account</a></li>
            <li><a href="." className="btn">View plans</a></li>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
