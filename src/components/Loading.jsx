import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'


const Loading = () => {
    
  return (

      <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1}}
      exit={{opacity : 0, y : "-100%" }}
      transition={{ duration: 2 }}
      className="fixed inset-0  flex items-center justify-center bg-black text-white text-2xl"
    >

    
    Loadingt...
   
    </motion.div>
   
  )
}

export default Loading