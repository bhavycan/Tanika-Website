import React, { useEffect, useRef } from 'react'
import ServiceWorkBanner from '../../templates/ServiceWorkBanner'
import gsap, { ScrollTrigger } from 'gsap/all'
import Steps from './Steps'
import { motion } from 'framer-motion'

const Process = () => {
  
  gsap.registerPlugin(ScrollTrigger)
  
  const parent = useRef(null)
  
  useEffect(() => {
   const tl =  gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: 'top 0%',
        end: 'bottom -300%',
        scrub: true,
        pin: true,
        markers: true,
      },
    })

      tl.to('.step-card-container', {
        left: "100%",
        duration : 20
        
 
      })
      

  }, [])
  return (
    <div ref={parent} className='w-full h-[100vh] relative  bg-white'>
         
        <div className="w-full h-full flex items-center justify-center">
            <h1 className='text-[6vw] z-40 bg-[#F7C9D3]  p-3 font-["Seasons"] font-semibold text-black'>Your dream home in 5 steps</h1>
</div>
<div className="step-card-container h-full w-[400%]  absolute top-0 -left-[400%]">

              <Steps />
</div>

          
           
        
          
    </div>
  )
}

export default Process