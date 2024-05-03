import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CheckIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (date) => {
    if (date >= new Date()) {
      setSelectedDate(date);
      setInputValue(formatDate(date)); 
    }
    setIsOpen(false);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="CheckIn">
      <button onClick={toggleDropdown}>CHECK-IN</button>
      <input
        type="date"
        id="checkin-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        min={formatDate(new Date())} 
      />
      {isOpen && (
        <div className="calendar-container">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={new Date()} 
          />
        </div>
      )}
    </div>
  );
};

export default CheckIn;
