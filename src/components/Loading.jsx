import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import useIsMobile from '../hooks/useIsMobile'


const Loading = () => {

  const isMobile = useIsMobile()
    
  return (

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity : 0}}
      transition={{ duration: 2 }}
      className="fixed inset-0 w-full  h-[100vh]  flex items-center justify-center text-black text-2xl"
    >

    
      <article>
        <motion.span 
        initial={{ opacity: 0, x :100 }}
      animate={{ opacity: 1 , x: 0}}
      exit={{ opacity : 0 , x: -100}}
      transition={{ duration: 2, ease: "easeInOut" }}
        className={`font-["font123"] ${isMobile ? "h-[15vw] text-[17vw]" : "h-[8vw] text-[10vw]"} w-full  flex items-center justify-center   uppercase `}>designing</motion.span>
         <motion.span
         initial={{ scale: 0.8,  }}
      animate={{ scale: 1 , }}
      exit={{ opacity : 0 ,}}
      transition={{ duration: 2, ease: "easeInOut" }}
         className={`font-["font456"] ${isMobile ? "h-[12vw] text-[16vw]" : "h-[8vw] text-[7vw]"} w-full opacity-75   flex items-center justify-center    `}>Crafting</motion.span>
          <motion.span 
          
        initial={{ opacity: 0, x :-100 }}
      animate={{ opacity: 1 , x: 0}}
      exit={{ opacity : 0 , x: 100}}
      transition={{ duration: 2,ease: "easeInOut" }}
          className={`font-["font123"] ${isMobile ? "h-[15vw] text-[17vw]" : "h-[8vw] text-[10vw]"} w-full  flex items-center justify-center   uppercase `}>delivering</motion.span>
      </article>
   
    </motion.div>
   
  )
}

export default Loading