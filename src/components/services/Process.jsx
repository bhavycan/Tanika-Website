import React, { useEffect, useRef, useState } from 'react'
import ServiceWorkBanner from '../../templates/ServiceWorkBanner'
import gsap, { ScrollTrigger } from 'gsap/all'
import Steps from './Steps'
import { motion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'

const Process = () => {
  
  gsap.registerPlugin(ScrollTrigger)
  
  const parent = useRef(null)

  const isMobile = useIsMobile()
 
  
  useEffect(() => {
   const tl =  gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: 'top 0%',
        end: isMobile ? "bottom 90%" : 'bottom -300%',
        scrub: true,
        pin: true,
        markers: true,
      },
    })

      tl.to('.step-card-container', {
        left: "100%",
        duration : 20
        
 
      })
      
  
      setTimeout(() => {
            ScrollTrigger.refresh()
          }, 1000)
      
      
     
  
       return () => {
       
        tl.kill()
      };

  }, [])
  return (
    <div ref={parent} className='w-full h-[100vh] relative  bg-white'>
         
        <div className="w-full h-full flex items-center justify-center">
            <h1 className='text-[6vw] z-40   p-3 font-["Seasons"] font-semibold text-black'>Your dream home in 5 steps</h1>
</div>
<div className={`step-card-container h-[100vh] w-[400%]  absolute top-0 -left-[400%]`}>

              <Steps />
</div>

          
           
        
          
    </div>
  )
}

export default Process