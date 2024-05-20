import React from "react";
import { useState } from "react";
import DisplayCard from "./Components/DisplayCard";
import Beach from "./Components/Beach";
import Treehouses from "./Components/Treehouses";
import Amazing_Views from "./Components/Amazing_Views";
import Surfing from "./Components/Surfing";
import Castles from "./Components/Castles";
import Categories from "./Components/Categories";
import ImageLayout from "./Components/ImageLayout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ShowMore from "./Components/ShowMore";
import ShowMore2 from "./Components/ShowMore2";
import AboutPlace from "./Components/AboutPlace";
import DateSelector from "./Components/DateSelector";
import Navbar from "./Components/Navbar";
import SearchBox from "./Components/SearchBox";
import { Container, Grid } from "@mui/material";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div>
        <Grid container sx={{ borderBottom: "solid 1px rgba(0, 0, 0, 0.1)" }}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>

          {/* <Grid item xs={12} sx={{marginBottom:'1%'}}>
            <SearchBox />
          </Grid> */}

          <Grid
            item
            xs={12}
            sx={{
              marginBottom: "1%",
              borderTop: "solid 1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Categories />
          </Grid>
        </Grid>
      </div>
      <Routes>
        <Route path="/" element={<Surfing />} />
        <Route path="/Surfing" element={<Surfing />} />
        <Route path="/Surfing" element={<Surfing />} />
        <Route path="/Castles" element={<Castles />} />
        <Route path="/AmazingViews" element={<Amazing_Views />} />
        <Route path="/Treehouses" element={<Treehouses />} />
        <Route path="/Beaches" element={<Beach />} />
        <Route path="/:category/:placeId" element={<AboutPlace />} />
      </Routes>
    </Router>
  );
}

export default App;
