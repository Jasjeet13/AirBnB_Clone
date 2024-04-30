import React from 'react'
import DisplayCard from './Components/DisplayCard'
import Beach from './Components/Beach'
import Treehouses from './Components/Treehouses'
import Amazing_Views from './Components/Amazing_Views'
import Surfing from './Components/Surfing'
import Castles from './Components/Castles'
import Categories from './Components/Categories'
import ImageLayout from './Components/ImageLayout'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShowMore from './Components/ShowMore'
import ShowMore2 from './Components/ShowMore2'
import AboutPlace from './Components/AboutPlace'
import DateSelector from './Components/DateSelector'



function App() {
  return (
    // <Router>
    //   <div>
    //     <Categories />
    //   </div>
    //   <Routes>
    //     <Route path='Surfing' Component={Surfing}/>
    //     <Route path='Castles' Component={Castles}/>
    //     <Route path='AmazingViews' Component={Amazing_Views}/>
    //     <Route path='Treehouses' Component={Treehouses}/>
    //     <Route path='Beaches' Component={Beach}/>
    //   </Routes>
    // </Router>

    // <Router>
    //   <div>
    //     <ShowMore />
    //   </div>
    //   <Routes>
    //     <Route path='ShowMore2' Component={ShowMore2}/>
    //   </Routes>
    // </Router>


    <div>
      <AboutPlace />
      {/* <DateSelector /> */}
    </div>
  );
}

export default App;
