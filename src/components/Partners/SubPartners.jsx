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
       
              rotateY: activeIndex === index ? -3 : 0,
               rotateZ: activeIndex === index ? -3 : 0,
               backgroundColor : activeIndex === index ? "#E2B469" : "white",
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
  className={`card-deck w-[25%] px-2 py-2 flex  bg-white  absolute rounded-lg h-[70%] shadow-2xl border-2 borde-white`}>
    <div className="w-[30%] h-[100%] border-r-2 border-gray-300   "><h1 className=' -rotate-90 w-full h-full flex items-center justify-center text-[3vw] pointer-events-none  font-serif '>Hardware</h1></div>
       <div className="w-[70%] h-[100%] flex flex-col items-center   bg-pink-200">
      <div className="image w-[80%] h-[30%] rounded-md mt-[10%] overflow-hidden bg-pink-600">
        <img className='w-full h-full object-cover' src="/images/partners_images/asian_paints.webp" alt="" />
      </div>
      <div className="image w-[80%] h-[50%] rounded-md mt-[10%] overflow-hidden bg-pink-600">
      
      </div>

       </div>

  </motion.div>
          )
      })}
</div>
  
  
    </div>
  )
}

export default SubPartners