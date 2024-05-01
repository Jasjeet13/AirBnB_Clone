import React from "react";
import GuestDropdown from "./Components/GuestDropdown";
import Searchbox from "./Components/SearchBox";
import Search from "antd/es/transfer/search";
import Reserve from "./Components/Reserve";
import AboutPlace from "./Components/AboutPlace";
import Footer2 from "./Components/Footer2";
function App() {
  return (
    <>
      <Searchbox />
      <Reserve />
      <Footer2 />
    </>
  );
}

export default App;
