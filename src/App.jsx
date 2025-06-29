import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import SitePage from './SitePage'
const Portfolio = lazy(()=> import('./components/portfolio/Portfolio'))
const Services = lazy(()=> import('./components/services/Services'))
const Partners = lazy(()=> import( './components/Partners/Partners') )
const FAQs = lazy(()=>import('./components/FAQs/FAQs'))
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
   
 <div key="mainPage-loader" className="relative overflow-hidden"> 
    <ScrollToTop />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SitePage />} />
        <Route path="/services" element={<Services />} />
       <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/partners' element={<Partners />} />
         <Route path='/faqs' element={<FAQs />} />
      </Routes>
      </Suspense>

     
    </div>
    
    

   
  );
  
}

export default App