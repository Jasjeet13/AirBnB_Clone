import React, { useState } from "react";
import "./SearchBox.css";

const SearchBox = () => {
  const [isCursorInBox, setIsCursorInBox] = useState(false);

  const handleMouseEnterBox = () => {
    setIsCursorInBox(true);
  };

  const handleMouseLeaveBox = () => {
    setIsCursorInBox(false);
  };

  return (
    <div className="search-box-container">
      {!isCursorInBox && (
        <>
          <div className="vertical-line left"></div>
          <div className="vertical-line right"></div>
        </>
      )}
      <div className="search-box-content">
        <div
          className="box"
          onMouseEnter={handleMouseEnterBox}
          onMouseLeave={handleMouseLeaveBox}
        >
          hiiii
        </div>
        <div
          className="box"
          onMouseEnter={handleMouseEnterBox}
          onMouseLeave={handleMouseLeaveBox}
        >
          helloo
        </div>
        <div
          className="box"
          onMouseEnter={handleMouseEnterBox}
          onMouseLeave={handleMouseLeaveBox}
        >
          bie bie
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
