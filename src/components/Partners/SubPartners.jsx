import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const SubPartners = () => {
 const cardinfo = [

    {
        name : "Hardware",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/ebco.webp"]
    },
    {
        name : "Hardware",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/hettich.png"]
    },
    {
        name : "Hardware",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/olive-logo.webp"]
    },
    {
        name : "Hardware",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : [ "/images/partners_images/vita.png"]
    },
      {
        name : "Electric",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/rr.png"]
    },
    {
        name : "Electric",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/finolex.png"]
    },
    {
        name : "Electric",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/elleys_Logo.png"]
    },
      {
        name : "Plywood",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/royal_touch.jpg"]
    },
     {
        name : "Paint",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing eli amet consectetur adipisicing eli",
        image : ["/images/partners_images/asian_paints.webp"]
    },]




 const [activeIndex, setActiveIndex] = useState(null);

useEffect(() => {
  if (activeIndex !== null) {
    const timeout = setTimeout(() => {
      setActiveIndex(null);
    }, 5000);

    return () => clearTimeout(timeout); 
  }
}, [activeIndex]);


  return (
    <div className='w-full h-[100vh] flex items-center relative justify-center'>
<motion.div
viewport={{once :true}} className='card-container w-[80%] h-[80%] flex items-center  relative'>
      {cardinfo.map((item,index)=>{
          return(
  <motion.div 
  onClick={()=>setActiveIndex(index)}
  initial={{}}
 
   whileInView={{

              scale: activeIndex === index ? 1.1 : 1,
              y: activeIndex === index ? -40 : 0,
              x : `${index * 35}%`,
              rotateY: activeIndex === index ? -3 : 0,
               rotateZ: activeIndex === index ? -3 : 0,
               backgroundColor : activeIndex === index ? "#E2B469" : "white",
              transition: {
                   x: {
      duration: 1,
      delay: index * 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
    scale: { duration: 0.3 },
    y: { duration: 0.3 },
    rotateY: { duration: 0.3 },
    rotateZ: { duration: 0.3 },
    backgroundColor: { duration: 0.3 },
              },
            }}
   style={{
        left: "0%",
        zIndex: activeIndex === index ? 100 : index * 10,
      }}
  className={`card-deck w-[25%] px-2 py-2 flex  bg-white  absolute rounded-lg h-[70%] shadow-2xl border-2 borde-white`}>
    <div className="w-[30%] h-[100%] border-r-2 border-white   "><h1 className=' -rotate-90 w-full h-full flex items-center justify-center text-[3vw] pointer-events-none  font-serif '>{item.name}</h1></div>
       <div className="w-[70%] h-[100%] flex flex-col items-center  ">
      <div className="image w-[80%] h-[30%] rounded-md mt-[10%] overflow-hidden">
        <img className='w-full h-full object-contain ' src={item.image} alt="" />
      </div>
      <div className=" w-[80%] px-2 py-1 leading-5 text-center  h-[50%] rounded-md mt-[10%] overflow-hidden">
      <h1>{item.info}</h1>
      </div>

       </div>

  </motion.div>
          )
      })}
</motion.div>
  
  
    </div>
  )
}

export default SubPartners