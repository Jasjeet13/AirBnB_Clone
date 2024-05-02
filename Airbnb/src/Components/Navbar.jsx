import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" style={{ height: "100%" }} />
      </div>
      <div className="navbar-links">
        {/* <p style={{fontSize:'15px',fontWeight:'600'}}>Stays</p> */}
        <SearchBox />
      </div>
      <div className="navbar-account">
        <a href="#menu" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} color="grey" fontSize="12px" />
        </a>
        <a href="#profile" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faUser} color="grey" />
        </a>
        {showDropdown && (
          <div className="dropdown-menu">
            <div className="login">
              <p>Login</p>
            </div>
            <div className="signup">
              <p>Sign up</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
