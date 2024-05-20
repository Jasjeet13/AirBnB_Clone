import React, { useState } from "react";
import axios from "axios";
import "./DateSelector.css";

const DateSelector = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const saveDatesToServer = async (dates) => {
    try {
      await axios.post("http://localhost:3001/loginUser", dates);
      console.log("Dates saved successfully");
    } catch (error) {
      console.error("There was an error saving the dates!", error);
    }
  };

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
      const dates = {
        checkInDate: checkInDate
          ? checkInDate.toISOString().split("T")[0]
          : null,
        checkOutDate: selectedDate.toISOString().split("T")[0],
      };
      saveDatesToServer(dates);
    }
  };

  return (
    <div className="flexdate">
      <div className="checkincheckout">
        <div className="label">
          <label htmlFor="checkInDate">
            <p style={{ fontWeight: "700" }}>Check-in</p>
          </label>
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
      <div style={{ borderLeft: "solid 2.5px lightgrey" }}></div>
      <div className="checkincheckout">
        <div className="label">
          <label htmlFor="checkOutDate">
            <p style={{ fontWeight: "700" }}>Check-out</p>
          </label>
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
