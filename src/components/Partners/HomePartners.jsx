import { motion } from 'framer-motion'
import { easeIn } from 'motion/react'
import { div } from 'motion/react-client';

import React, { useEffect, useState } from 'react'

const HomePartners = () => {


      const [isMobile, setIsMobile] = useState(false);
    
        useEffect(() => {
          const checkMobile = () => {
            setIsMobile(window.innerWidth <= 480);
          };
          
          checkMobile();
          window.addEventListener("resize", checkMobile);
          return () => window.removeEventListener("resize", checkMobile);
        }, []);
      

  return (
    <div className='w-full h-[100vh] flex flex-col items-center relative justify-center'>
        <motion.div
        
        
        className={`main-container   ${isMobile ? "w-[90%] h-[60%]  shadow-2xl " : "w-[60%] h-[70%] "} relative rounded-3xl overflow-hidden `}>

             {isMobile && (
                <div className='w-full h-[20%] flex items-center justify-center absolute mt-[20%] '>


                <motion.img
                 initial={{opacity : 0 }}
            whileInView={{opacity : 1}}
            transition={{duration: 1}}
                className='  w-[50%] h-[100%] object-cover'
              src="/images/logo-white.png" alt="" />
                </div>
                )}
              
            <motion.img
            initial={{opacity : 0 }}
            whileInView={{opacity : 1}}
            transition={{duration: 1}}
            className='w-full h-full object-cover' src={"/images/bedroomback.png"} alt="" />
       
             <motion.img

             className={` z-20 ${isMobile ? "w-[100%] h-[80%] top-[18%]  " : "w-full top-[10%] -left-2 h-full"}  object-cover absolute   `} src="/images/bed.png" alt="" />
        </motion.div>
       
        <div className="w-[60%] h-[80%] absolute  flex flex-col items-center top-[15%]"><motion.h1 
         initial={{opacity : 0 }}
            whileInView={{opacity : 1}}
            transition={{duration: 1}}
        className={`  ${isMobile ? "w-[80%] h-[10%] text-[9vw] bg-[#F58220] shadow-lg rounded-md" : "w-[30%] h-[20%] text-[5vw]"}    text-white flex font-["Brittany"] items-center justify-center `}>Exclusive</motion.h1>
        <motion.h1
        initial={{y: 50,opacity : 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, delay: .2, ease: easeIn}}
        className={` ${isMobile ? "w-[100%] h-[20%] mt-[55%] text-[18vw]" : "w-[100%] h-[40%] text-[18vw]"}     flex font-["Seasons"] items-center justify-center uppercase `}>Partners</motion.h1>
        <div className='w-[80%] h-[15%] relative flex  items-center justify-center z-30 font-serif  '>
            <motion.img
             initial={{opacity : 0 }}
            whileInView={{opacity : 1}}
            transition={{duration: 1,delay: .4}}
            className='w-full h-full absolute -top-[20%] ' src="https://mysleepwell.com/static/img/logo.svg" alt="" />
        </div>
        
        
        </div>
          
        
       
    </div>
  )
}

export default HomePartners