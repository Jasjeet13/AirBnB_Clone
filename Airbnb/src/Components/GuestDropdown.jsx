import React, { useState } from "react";
import "./GuestDropdown.css";

const GuestDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleIncrement = (type) => {
    switch (type) {
      case "adults":
        setAdults(adults + 1);
        break;
      case "children":
        setChildren(children + 1);
        break;
      case "infants":
        setInfants(infants + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type) => {
    switch (type) {
      case "adults":
        if (adults > 1) setAdults(adults - 1);
        break;
      case "children":
        if (children > 0) setChildren(children - 1);
        break;
      case "infants":
        if (infants > 0) setInfants(infants - 1);
        break;
      default:
        break;
    }
  };

  const totalGuests = adults + children + infants;

  return (
    <div className="guest-dropdown">
      <button className="toggle-button" onClick={toggleDropdown}>
        <p style={{fontSize:'12px',fontWeight:'700'}}>Who</p>
        <p>{totalGuests} guests</p>
      </button>
      {isOpen && (
        <div className="dropdown-content">

          <div className="type">
            <ul>
              <li>
                <div className="type-text">
                  <p className="type-heading">Adults</p>
                  <p className="type-heading-sub">Ages 13 or above</p>
                </div>

                <div className="buttons">
                  <button className="button-plus-minus" onClick={() => handleIncrement("adults")}>+</button>
                  <p>{adults}</p>
                  <button className="button-plus-minus" onClick={() => handleDecrement("adults")}>-</button>
                </div>
                
              </li>

              <li>
                <div className="type-text"> 
                  <p className="type-heading">Children</p>
                  <p className="type-heading-sub">Ages 2–12</p>
                </div>

                <div className="buttons">
                  <button className="button-plus-minus" onClick={() => handleIncrement("children")}>+</button>
                  <p>{children}</p>
                  <button className="button-plus-minus" onClick={() => handleDecrement("children")}>-</button>
                </div>
                
              </li>

              <li>
                <div className="type-text">
                  <p className="type-heading">Infants</p>
                  <p className="type-heading-sub">Under 2</p>
                </div>

                <div className="buttons">
                  <button className="button-plus-minus" onClick={() => handleIncrement("infants")}>+</button>
                  <p>{infants}</p>
                  <button className="button-plus-minus" onClick={() => handleDecrement("infants")}>-</button>
                </div>
                
              </li>

            </ul>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default GuestDropdown;
