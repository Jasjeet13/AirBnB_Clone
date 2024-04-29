import React from "react";
import "./Reserve.css";
import { DatePicker } from "antd";
import DateSelector from "./DateSelector";
import GuestDropdown from "./GuestDropdown";

const Reserve = () => {
  return (
    <div className="reserve-box">
      <div className="price">
        <h2>
          $731.13<br></br>
          <p className="subline">Total before taxes</p>
        </h2>
      </div>
      <div className="cinoutguest">
        <DateSelector />
        <hr />
        <GuestDropdown />
      </div>
      <button className="reserve">Reserve</button>
      <p className="subline2">You won't be charged yet</p>
    </div>
  );
};

export default Reserve;
