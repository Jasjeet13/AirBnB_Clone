import React, { useState } from "react";
import "./SearchBox.css";
import DateSelector from "./DateSelector";
import GuestDropdown from "./GuestDropdown";
const SearchBox = () => {
  const [isCursorInBox, setIsCursorInBox] = useState(false);
  

  const handleMouseEnterBox = () => {
    setIsCursorInBox(true);
  };

  const handleMouseLeaveBox = () => {
    setIsCursorInBox(false);
  };

  return (
    <div className="outer-search-box">
    <div className="search-box-container">
      {!isCursorInBox && (
        <>
          <div className="vertical-line right"></div>
        </>
      )}
      <div className="search-box-content">
        <div
          className="box"
          onMouseEnter={handleMouseEnterBox}
          onMouseLeave={handleMouseLeaveBox}
        >
          <DateSelector />
        </div>
        <div
          className="box"
          onMouseEnter={handleMouseEnterBox}
          onMouseLeave={handleMouseLeaveBox}
        >
          <GuestDropdown />
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default SearchBox;
