import React from 'react';
import { BannerContainer } from './Components/Banner/BannerContainer';
import { NavContainer } from './Components/Nav/NavContainer';
import { FilterContainer } from './Components/Filter/FilterContainer';
import './App.css';






function App() {
  
  return (
    <div>
      <BannerContainer />
      <NavContainer />
      <FilterContainer/>
    </div>
  )
}

export default App;
