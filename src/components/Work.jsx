
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Countdown from '../templates/Countdown'

const Work = () => {
   const [isMobile, setIsMobile] = useState(false);
  const parent = useRef(null)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
  
    checkMobile();
    window.addEventListener('resize', checkMobile);
  
    gsap.registerPlugin(ScrollTrigger);
  
    // Cleanup existing ScrollTrigger to avoid duplication
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  
   



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: isMobile ? 'top 0%' : 'top 0%',
        end: 'bottom -150%',
        scrub: true,
        pin: true,
        markers: false,
      },
    });

isMobile && (tl.to('.workvideo',{
  scale: 0,
  duration: 1,
  opacity: 0,
  ease: 'power.inOut',
 
}))

    
  
    tl.to('.work', {
     
      scale: 10,
      duration: 1,
      opacity: 0,
      ease: 'power.inOut',
    
    });
  
    tl.to('.work-part', {
      scale: 1,
      duration: 1,
      opacity: 1,
      ease: 'power.inOut',
      y: 50,
      x: 0,
      transformOrigin: 'center',
    });

   
  
    return () => {
      window.removeEventListener('resize', checkMobile);
      tl.kill(); // Kill GSAP timeline to prevent duplicate animations
    };
  }, [isMobile]);

  return (
    <div ref={parent} className={`main w-full relative  h-[100vh] mb-20 overflow-hidden`}>
      <div  className=' w-full h-[100vh]  relative flex items-center justify-center  px-6 py-3 text-black overflow-hidden'>



        {isMobile && (<div className="workvideo absolute w-full p-3 h-full ">
          <video autoPlay muted loop className='w-full h-full object-cover' src="/videos/work.mp4"></video>
        </div>)}
      
      <div  className={`container w-full relative  h-full flex   flex-col items-center ${isMobile ? "justify-center" : ""} `}>
        
        <h1 className={`work  font-['Seasons'] text-[28vw]   h-fit overflow-hidden`}>
           <motion.span
                        initial={{ y: -100,  opacity: 0 }}
                        whileInView={{ y: 0,  opacity: 1 }}
                        transition={{ duration: 0.5, delay:  0.2 }}
                        className="inline-block"
                      >
                   work
                      </motion.span>
          </h1>
       
        </div>
      </div>

    
      <div className={`work-part top-[0%] ${isMobile ? "flex-col" : " "}  bg-red-500  opacity-0 absolute flex items-center justify-center gap-2 w-full h-[90vh]`}>

    <div className={`countdown ${isMobile ? " w-[100%] h-[50%]" : "w-[50%]  h-full "}  flex items-center flex-col  justify-center bg-green-300 `}>
      <Countdown />
      <motion.div 
       initial={{ y: 20 }}
       whileInView={{ y: 0 }}
       transition={{ duration: 1, delay:  1 }}
      className={`text-below w-[80%] ${isMobile ? "text-center text-sm leading-4 mt-5" : " text-center text-xl leading-6"} bg-yellow-300    opacity-60   font-serif text-black`}><p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatem deleniti, sunt nostrum laboriosam nulla reprehenderit ut provident magnam similique aperiam expedita veniam aliquid illo ratione atque saepe! Nemo dolor dicta cum optio corrupti minus?</p></motion.div>
    </div>

    <div className="site-name w-[50%] h-full flex items-center justify-center flex-col gap-3 "></div>
          

      </div>
  
    </div>
    
  )
}

export default Work