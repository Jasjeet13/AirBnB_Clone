import React from 'react';
import './Navbar.css'; 
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" style={{ height: '100%' }} />
      </div>
      <div className="navbar-links">
        <p>Stays</p>
      </div>
      <div className="navbar-account">
      <a href="#menu">
        <FontAwesomeIcon icon={faBars} color="grey" fontSize="12px"/>
      </a>
      <a href="#profile">
        <FontAwesomeIcon icon={faUser} color="grey"/>
      </a>
      </div>
    </nav>
  )
}

export default Navbar;
