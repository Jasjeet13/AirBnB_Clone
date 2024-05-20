import React, { useState } from "react";
import axios from "axios";
import "./GuestDropdown.css";

const GuestDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleIncrement = (type) => {
    const newGuests = { ...guests };
    newGuests[type]++;
    setGuests(newGuests);
  };

  const handleDecrement = (type) => {
    const newGuests = { ...guests };
    if (newGuests[type] > 0) newGuests[type]--;
    setGuests(newGuests);
  };

  const totalGuests = guests.adults + guests.children + guests.infants;

  const saveGuestsToServer = async () => {
    try {
      const response = await axios.post("http://localhost:3001/loginUser", {
        totalGuests: totalGuests,
      });
      console.log("Total guests saved successfully", response.data);
    } catch (error) {
      console.error("There was an error saving the total guests!", error);
    }
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
    saveGuestsToServer(); // Save the total guests when the dropdown is closed
  };

  return (
    <div className="guest-dropdown">
      <button className="toggle-button" onClick={toggleDropdown}>
        <p style={{ fontSize: "12px", fontWeight: "700", color: "black" }}>
          Who
        </p>
        <p style={{ color: "black" }}>{totalGuests} guests</p>
      </button>
      {isOpen && (
        <div className="dropdown-content" onBlur={handleDropdownClose}>
          <div className="type">
            <ul>
              <li>
                <div className="type-text">
                  <p className="type-heading">Adults</p>
                  <p className="type-heading-sub">Ages 13 or above</p>
                </div>
                <div className="buttons">
                  <button
                    className="button-plus-minus"
                    onClick={() => handleIncrement("adults")}
                  >
                    +
                  </button>
                  <p>{guests.adults}</p>
                  <button
                    className="button-plus-minus"
                    onClick={() => handleDecrement("adults")}
                  >
                    -
                  </button>
                </div>
              </li>
              <li>
                <div className="type-text">
                  <p className="type-heading">Children</p>
                  <p className="type-heading-sub">Ages 2–12</p>
                </div>
                <div className="buttons">
                  <button
                    className="button-plus-minus"
                    onClick={() => handleIncrement("children")}
                  >
                    +
                  </button>
                  <p>{guests.children}</p>
                  <button
                    className="button-plus-minus"
                    onClick={() => handleDecrement("children")}
                  >
                    -
                  </button>
                </div>
              </li>
              <li>
                <div className="type-text">
                  <p className="type-heading">Infants</p>
                  <p className="type-heading-sub">Under 2</p>
                </div>
                <div className="buttons">
                  <button
                    className="button-plus-minus"
                    onClick={() => handleIncrement("infants")}
                  >
                    +
                  </button>
                  <p>{guests.infants}</p>
                  <button
                    className="button-plus-minus"
                    onClick={() => handleDecrement("infants")}
                  >
                    -
                  </button>
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
