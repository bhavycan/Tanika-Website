
import React, { useEffect } from 'react'
import Home from './components/Home'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll';
import Work from './components/Work';
import Offer from './components/Offer';
import Review from './components/Review';
import Contact from './components/Contact';
import { Routes, Route, Router } from 'react-router-dom';


const SitePage = () => {

    const locomotiveScroll = new LocomotiveScroll();
    const imagelink = "https://images.unsplash.com/photo-1509624776920-0fac24a9dfda?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    
    
  
    
  return (
<div className='w-full overflow-hidden   text-white'>
      
       
      <Home  />
      <About />
   
      <Offer imagelink={imagelink} />
      <Work />
      <Review />
     
      <Contact />
     
     
     
    </div>
  )
}

export default SitePage