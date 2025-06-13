import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import SitePage from './SitePage'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio';
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  const location = useLocation();
  
const locomotiveScroll = new LocomotiveScroll();
 
  useEffect(() => {
    let previousWidth = window.innerWidth;
  
    const handleResize = () => {
      if (window.innerWidth !== previousWidth) {
        previousWidth = window.innerWidth;
        window.location.reload(); // Only reload if width changes
      }
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative overflow-hidden"> {/* ✅ Ensures Menu can overlay */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SitePage />} />
        <Route path="/services" element={<Services />} />
       <Route path='/portfolio' element={<Portfolio />} />
      </Routes>

     
    </div>
  );
  
}

export default App