import React from "react";
import "./DateCheck.css";

const DateCheck = ({ children }) => {
  return (
    <>
      <div className="DateCheck">
        {children}
        <div className="select-data"></div>
      </div>
    </>
  );
};

export default DateCheck;
