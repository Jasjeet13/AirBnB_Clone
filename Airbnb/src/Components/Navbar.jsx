import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src={logo} alt="Logo" style={{ height: "100%" }} />
        </Link>
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
              <Link to="/login" style={{textDecoration:'none',margin:'0',padding:'0',width:'100%'}}>
                <p>Login</p>
              </Link>
            </div>
            <div className="signup">
            <Link to="/signup" style={{textDecoration:'none',margin:'0',padding:'0',width:'100%'}}>
                <p >Sign-up</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
