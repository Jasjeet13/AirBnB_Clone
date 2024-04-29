import React, { useState } from "react";
import "./DateSelector.css";

const DateSelector = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate >= new Date()) {
      setCheckInDate(selectedDate);
    }
  };

  const handleCheckOutChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate > checkInDate) {
      setCheckOutDate(selectedDate);
    }
  };

  return (
    <div className="flexdate">
      <div className="checkincheckout">
        <div className="label">
          <label htmlFor="checkInDate">Check-in</label>
        </div>
        <div className="checkinout">
          <input
            type="date"
            id="checkInDate"
            onChange={handleCheckInChange}
            value={checkInDate ? checkInDate.toISOString().split("T")[0] : ""}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>
      <div className="checkincheckout">
        <div className="label">
          <label htmlFor="checkOutDate">Check-out</label>
        </div>
        <div className="checkinout">
          <input
            type="date"
            id="checkOutDate"
            onChange={handleCheckOutChange}
            value={checkOutDate ? checkOutDate.toISOString().split("T")[0] : ""}
            min={checkInDate ? checkInDate.toISOString().split("T")[0] : ""}
            disabled={!checkInDate}
          />
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
