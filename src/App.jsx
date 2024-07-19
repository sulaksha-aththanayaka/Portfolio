import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pos from './projects/Pos';
import Eshop from './projects/Eshop';
import Rfid from './projects/Rfid';
import VehicleAds from './projects/VehicleAds';
import Stlm from './projects/Stlm';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/pos" element={<Pos />} />
          <Route path="/Portfolio/e-commerce" element={<Eshop />} />
          <Route path="/Portfolio/rfid" element={<Rfid />} />
          <Route path="/Portfolio/va" element={<VehicleAds />} />
          <Route path="/Portfolio/stlm" element={<Stlm />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App