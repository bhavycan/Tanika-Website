
import React, { lazy, Suspense, useEffect, useState } from 'react'
const Home = lazy(()=> import('./components/Home'))
const Review = lazy(() => import('./components/Review'))
const Work = lazy(()=> import('./components/Work'))
const Offer = lazy(()=> import('./components/Offer'))
const Contact = lazy(()=> import('./components/Contact'))
const About = lazy(()=> import('./components/About'))
import { Routes, Route, Router } from 'react-router-dom';
import Loading from './components/Loading'
import { AnimatePresence } from 'framer-motion'



let hasLoaderShown = false;
const SitePage = () => {

    
    const imagelink = "https://images.unsplash.com/photo-1509624776920-0fac24a9dfda?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      const [loading, setLoading] = useState(() => !hasLoaderShown);

  useEffect(() => {
 
     if (!hasLoaderShown) {
      const timer = setTimeout(() => {
        setLoading(false);
        hasLoaderShown = true;
      }, 2000);

      return () => clearTimeout(timer);
  }}, []);
    
    
  
    
  return (
   
  
 <div className="w-full overflow-hidden text-white">
<AnimatePresence mode='wait'>
  {loading ?<Loading key='loader' />  : <Suspense fallback={<Loading />}>
     
        <Home />
        <About />
        <Offer imagelink={imagelink} />
        <Work />
        <Review />
        <Contact />
        
      </Suspense>}
      </AnimatePresence>
    </div>
      
      
  )
}

export default SitePage