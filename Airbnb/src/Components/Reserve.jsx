import React from "react";
import "./Reserve.css";
import { DatePicker } from "antd";
import DateSelector from "./DateSelector";
import GuestDropdown from "./GuestDropdown";

const Reserve = ({price}) => {
  return (
    <div className="reserve-box">
      <div className="price">
        <div style={{display:'flex',flexDirection:'column'}}>
          <p style={{fontSize:'18px',fontWeight:'700',marginBottom:'5%'}}>{price}</p>
        </div>
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
