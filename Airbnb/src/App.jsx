import React from "react";
import DateCheck from "./Components/DateCheck";
// import BeachCard from "./Components/BeachCard";

function App() {
  return (
    <div>
      {/* <BeachCard /> */}
      <DateCheck>
        <p className="box-heading">Add dates for prices</p>
        {/* components inside the box coponent in the check dates will show here */}
      </DateCheck>
    </div>
  );
}

export default App;
