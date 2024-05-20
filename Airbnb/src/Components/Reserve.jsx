import React from "react";
import "./Reserve.css";
import { DatePicker } from "antd";
import DateSelector from "./DateSelector";
import GuestDropdown from "./GuestDropdown";
// import Login from "./Login";
import Signup from "./Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Reserve = ({ price }) => {
  

  return (
    <div >

        <div className="reserve-box">
          <div className="price">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "5%",
                }}
              >
                {price}
              </p>
            </div>
          </div>
          <div className="cinoutguest">
            <DateSelector />
            <hr />
            <GuestDropdown />
          </div>
          <Link to="/payment" >
            <button className="reserve" >Reserve</button>
          </Link>
          <p className="subline2">You won't be charged yet</p>
        </div>
      
    </div>
  );
};

export default Reserve;
k