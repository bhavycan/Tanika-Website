import { motion } from 'framer-motion';
import React, { useState } from 'react'

const SubPartners = () => {

 const [activeIndex, setActiveIndex] = useState(null);

  
  return (
    <div className='w-full h-[100vh] flex items-center relative justify-center'>
<div className='card-container w-[80%] h-[80%] flex items-center  relative'>
      {Array.from({length : 9}).map((item,index)=>{
          return(
  <motion.div 
  onClick={()=>setActiveIndex(index)}
  initial={{}}
   animate={{
              scale: activeIndex === index ? 1.1 : 1,
              y: activeIndex === index ? -40 : 0,
              opacity : activeIndex === index ? 1 : .50,
              rotateY: activeIndex === index ? -3 : 0,
               rotateZ: activeIndex === index ? -3 : 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration : 2
              },
            }}
   style={{
        left: `${index * 9}%`,
        zIndex: activeIndex === index ? 100 : index * 10,
      }}
  className={`card-deck w-[25%]   absolute rounded-lg h-[70%] bg-white shadow-2xl border-2 borde-white`}>{index * 10}</motion.div>
          )
      })}
</div>
  
  
    </div>
  )
}

export default SubPartners