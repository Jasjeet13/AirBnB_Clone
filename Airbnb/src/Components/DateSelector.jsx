import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DateSelector.css";

const DateSelector = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [lastUserName, setLastUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the current_user JSON file
        const response = await fetch('http://localhost:3001/current_user');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // Get the last user's name from the fetched data
        const lastUser = data[data.length - 1];
        const userName = lastUser ? lastUser.username : '';
        setLastUserName(userName);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const saveDatesToServer = async (dates) => {
    try {
      const dataToSend = { ...dates, username: lastUserName };
      
      await axios.post("http://localhost:3001/reserve", dataToSend);
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
