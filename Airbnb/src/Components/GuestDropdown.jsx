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
        Who <br></br>
        {totalGuests} guests
      </button>
    </div>
  );
};

export default GuestDropdown;
