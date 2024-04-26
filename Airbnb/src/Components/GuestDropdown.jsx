import React, { useState } from "react";
import "./GuestDropdown.css"; // Import CSS file for styling

const GuestDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleIncrement = (type) => {
    // Increment count based on type
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
    // Decrement count based on type
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
        {totalGuests} guests
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="category">
            <div className="inside-category">
              <span className="category-name">Adults:</span>
              <span className="category-count">{adults}</span>
            </div>
            <div className="increase-decrease">
              <button
                className="plus-minus plus"
                onClick={() => handleIncrement("adults")}
              >
                +
              </button>
              <button
                className="plus-minus minus"
                onClick={() => handleDecrement("adults")}
              >
                -
              </button>
            </div>
          </div>
          <div className="category">
            <div className="inside-category">
              <span className="category-name">Minors:</span>
              <span className="category-count">{children}</span>
            </div>
            <div className="increase-decrease">
              <button
                className="plus-minus plus"
                onClick={() => handleIncrement("children")}
              >
                +
              </button>
              <button
                className="plus-minus minus"
                onClick={() => handleDecrement("children")}
              >
                -
              </button>
            </div>
          </div>
          <div className="category">
            <div className="inside-category">
              <span className="category-name">Infants:</span>
              <span className="category-count">{infants}</span>
            </div>
            <div className="increase-decrease">
              <button
                className="plus-minus plus"
                onClick={() => handleIncrement("infants")}
              >
                +
              </button>
              <button
                className="plus-minus minus"
                onClick={() => handleDecrement("infants")}
              >
                -
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestDropdown;
