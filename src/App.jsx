import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './pages/Project';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/project" element={<Project />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App