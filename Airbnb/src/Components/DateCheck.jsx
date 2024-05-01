import React from "react";
import "./DateCheck.css";
import GuestDropdown from "./GuestDropdown";

const DateCheck = ({ children }) => {
  const [dates, setDates] = useState([]);
  console.log(dates);

  // Function to disable previous dates
  const disabledDate = (current) => {
    // Disable dates before today
    return current && current < moment().startOf("day");
  };

  return (
    <>
      <div className="DateCheck">
        {children}
        <RangePicker
          className="rangeDatePicker"
          onChange={(values) => {
            setDates(
              values.map((item) => {
                return moment(item).format("DD-MM-YYYY");
              })
            );
          }}
          disabledDate={disabledDate} // Apply disabledDate function
        />
        <GuestDropdown />
        <div className="reserve-div">
          <button className="reserve">Reserve</button>
        </div>
        <p className="para">You won't be charged yet</p>
      </div>
    </>
  );
};

export default DateCheck;
