import React from 'react'
import { useState } from 'react'
import DisplayCard from './Components/DisplayCard'
import Beach from './Components/Beach'
import Treehouses from './Components/Treehouses'
import Amazing_Views from './Components/Amazing_Views'
import Surfing from './Components/Surfing'
import Castles from './Components/Castles'
import Categories from './Components/Categories'
import ImageLayout from './Components/ImageLayout'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import ShowMore from './Components/ShowMore'
import ShowMore2 from './Components/ShowMore2'
import AboutPlace from './Components/AboutPlace'
import DateSelector from './Components/DateSelector'
import Navbar from './Components/Navbar'
import SearchBox from './Components/SearchBox'
import { Container, Grid } from '@mui/material'
import Footer from './Components/Footer'

function App() {

  return (
    <>      {/* <Searchbox /> */}
      {/* <Reserve /> */}
      {/* <SearchBox /> */}
      {/* <Navbar /> */}
      <Footer />
    </>
  );
}

export default App;
