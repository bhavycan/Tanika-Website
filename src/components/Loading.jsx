import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'


const Loading = () => {
    
  return (

      <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1}}
      exit={{opacity : 0, y : "-100%" }}
      transition={{ duration: 2 }}
      className="fixed inset-0 w-full  h-[100vh]  flex items-center justify-center bg-white text-black text-2xl"
    >

    
      <article>
        <span className='font-["font123"] w-full h-[8vw] flex items-center justify-center  text-[10vw] uppercase '>designing</span>
         <span className='font-["font456"] w-full opacity-75  h-[8vw] flex items-center justify-center  text-[7vw]  '>Crafting</span>
          <span className='font-["font123"] w-full h-[8vw] flex items-center justify-center  text-[10vw] uppercase  '>delivering</span>
      </article>
   
    </motion.div>
   
  )
}

export default Loading