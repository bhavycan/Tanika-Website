import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import SitePage from './SitePage'
const Portfolio = lazy(()=> import('./components/portfolio/Portfolio'))
const Services = lazy(()=> import('./components/services/Services'))
import LocomotiveScroll from 'locomotive-scroll';
import ScrollToTop from './components/ScrollToTop';
import gsap, { ScrollTrigger } from 'gsap/all'

const App = () => {
  const location = useLocation();
  const scrollRef = useRef(null);
const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)
 const scroll = new LocomotiveScroll({
    el: scrollRef.current,
    smooth: true,
  });

    setTimeout(() => {
    document.body.classList.remove('loading');
    ScrollTrigger.refresh();
  }, 1000);

    let previousWidth = window.innerWidth;
  
    const handleResize = () => {
      if (window.innerWidth !== previousWidth) {
        previousWidth = window.innerWidth;
        window.location.reload(); // Only reload if width changes
      }
    };
  
    window.addEventListener("resize", handleResize);
    return () => {window.removeEventListener("resize", handleResize)
     
    };
  }, []);
  return (
   
 <div key="mainPage-loader" className="relative overflow-hidden"> {/* ✅ Ensures Menu can overlay */}
    <ScrollToTop />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SitePage />} />
        <Route path="/services" element={<Services />} />
       <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      </Suspense>

     
    </div>
    
    

   
  );
  
}

export default App