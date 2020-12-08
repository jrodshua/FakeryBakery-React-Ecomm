import React from 'react';
import { BannerContainer } from './Components/Banner/BannerContainer';
import { NavContainer } from './Components/Nav/NavContainer';
import { FilterContainer } from './Components/Filter/FilterContainer';
import { CollectionContainer } from './Components/Collection/CollectionContainer';
import { FilterProvider } from './FilterContext';
import './App.css';






function App() {
  
  return (
    <div>
      <BannerContainer />
      <NavContainer />
      <FilterProvider>
        <FilterContainer />
        <CollectionContainer />
      </FilterProvider>
    </div>
  )
}

export default App;
