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
        Who <br></br>
        {totalGuests} guests
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {/* Dropdown content here */}
          <div className="title">
            <ul>
              <li>
                <p>Adults: {adults}</p>
              </li>

              <li>
                <p>Children: {children}</p>
              </li>
              <li>
                <p>Infants: {infants}</p>
              </li>
            </ul>
          </div>
          <div className="addminus">
            <ul>
              <li>
                <button onClick={() => handleIncrement("adults")}>+</button>
                <button
                  className="minus"
                  onClick={() => handleDecrement("adults")}
                >
                  -
                </button>
              </li>
              <li>
                <button onClick={() => handleIncrement("children")}>+</button>
                <button
                  className="minus"
                  onClick={() => handleDecrement("children")}
                >
                  -
                </button>
              </li>
              <li>
                <button onClick={() => handleIncrement("infants")}>+</button>
                <button
                  className="minus"
                  onClick={() => handleDecrement("infants")}
                >
                  -
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestDropdown;
