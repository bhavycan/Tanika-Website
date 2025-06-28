
import React, { lazy, Suspense, useEffect } from 'react'
const Home = lazy(()=> import('./components/Home'))
const Review = lazy(() => import('./components/Review'))
const Work = lazy(()=> import('./components/Work'))
const Offer = lazy(()=> import('./components/Offer'))
const Contact = lazy(()=> import('./components/Contact'))
const About = lazy(()=> import('./components/About'))
import { Routes, Route, Router } from 'react-router-dom';




const SitePage = () => {

    
    const imagelink = "https://images.unsplash.com/photo-1509624776920-0fac24a9dfda?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    
    
  
    
  return (
 <div className="w-full overflow-hidden text-white">
      <Suspense fallback={<div className="py-20 text-center text-black text-xl">Loading site...</div>}>
        <Home />
        <About />
        <Offer imagelink={imagelink} />
        <Work />
        <Review />
        <Contact />
      </Suspense>
    </div>
      
      
  )
}

export default SitePage