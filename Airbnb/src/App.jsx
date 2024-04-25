import React from "react";
import DateCheck from "./Components/DateCheck";
import DateRangePicker from "./Components/DateRangePicker";
// import BeachCard from "./Components/BeachCard";

function App() {
  return (
    <div>
      {/* <BeachCard /> */}
      <DateCheck>
        <p className="box-heading">Add dates for prices</p>
      </DateCheck>
    </div>
  );
}

export default App;
