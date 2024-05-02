import React from "react";
import "./Reserve.css";
import { DatePicker } from "antd";
import DateSelector from "./DateSelector";
import GuestDropdown from "./GuestDropdown";
// import Login from "./Login";
import Signup from "./Signup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Reserve = ({ price }) => {
  const [showLogin, setShowLogin] = useState(true);

  const handleShowLogin = () => {
    setShowLogin(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(true);
  };

  return (
    <div >
      {showLogin ? (
        <div className="reserve-box">
          <div className="price">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5%' }}>{price}</p>
            </div>
          </div>
          <div className="cinoutguest">
            <DateSelector />
            <hr />
            <GuestDropdown />
          </div>
          <button className="reserve" onClick={handleShowLogin}>Reserve</button>
          <p className="subline2">You won't be charged yet</p>
        </div>
      ) : (
        <div className="login-box">
          <FontAwesomeIcon icon={faTimes} onClick={handleCloseLogin} />
          <Signup />

        </div>
      )}
    </div>
  );
};

export default Reserve;
