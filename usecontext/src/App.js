import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Basket from './component/Basket';
import { HomeContextProvider } from './context/HomeContext';
import { BasketContextProvider } from './context/BasketContext';

function App() {

  return (
    <>
      <Navbar />
      <HomeContextProvider>
        <BasketContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </BasketContextProvider>
      </HomeContextProvider>
    </>
  );
}

export default App;