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

 const [isMobile, setIsMobile] = useState(false);

useEffect(() => {

  
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 480);
      };
      
      checkMobile();
      window.addEventListener("resize", checkMobile);
    
    const handleClickOutside = (event) => {
      if (!event.target.closest(".card-deck ")) {
        setActiveIndex(null);
      }
    };
  

  if (activeIndex !== null) {
    const timeout = setTimeout(() => {
      setActiveIndex(null);
    }, 2000);
 window.addEventListener("click", handleClickOutside);
    return () => {clearTimeout(timeout);    window.removeEventListener("resize", checkMobile); window.removeEventListener("click", handleClickOutside) }
  }
}, [activeIndex]);


  return (
    <div className='w-full h-[100vh] flex items-center relative justify-center'>
<motion.div
 className={`card-container ${isMobile ? "h-[100%] w-[100%] px-5    " : "h-[80%] w-[80%] "} flex items-center  relative`}>
      {cardinfo.map((item,index)=>{
          return(
  <motion.div 
  onClick={()=>setActiveIndex(index)}
  initial={{}}
  
   whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
 viewport={{once : true}}
   whileInView={{
              filter: activeIndex !== null && activeIndex !== index ? "blur(4px)" : "blur(0px)",
              scale: activeIndex === index ? 1.1 : 1,
              y: isMobile ? (activeIndex === index ? `${index *10}%` : `${index *30}%` ):( activeIndex === index ? -40 : 0),
              x : isMobile ? `${index * 15}%`  : `${index * 35}%`,
              rotateY:  isMobile ? 0 :   (activeIndex === index ? -3 : 0),
               rotateZ: isMobile ? 0 :   (activeIndex === index ? -3 : 0),
              transition: {
                   x: {
      duration: 1,
      delay: index * 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
    y: {
      duration: 2,
      delay: index * 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
    scale: { duration: 0.3 },
    y: { duration: 0.3 },
    rotateY: { duration: 0.3 },
    rotateZ: { duration: 0.3 },
               },
            }}
   style={{
        top  : isMobile ? "0%" : "",
        zIndex: activeIndex === index ? 100 : index * 10,
      }}
  className={`card-deck  px-2 py-2 flex ${isMobile ? "w-[40%] h-[30%]" : " w-[25%] h-[70%]"}  bg-white  absolute rounded-lg  shadow-2xl `}>
    <div className="w-[30%] h-[100%] border-r-2 border-y-zinc-200   "><h1 className={` -rotate-90 w-full h-full flex items-center justify-center  ${isMobile ? "text-[9vw]" : "text-[3vw]"} pointer-events-none  font-serif `}>{item.name}</h1></div>
       <div className="w-[70%] h-[100%] flex flex-col items-center  ">
      <div className="image w-[80%] h-[30%] rounded-md mt-[10%] overflow-hidden">
        <img className='w-full h-full object-contain ' src={item.image} alt="" />
      </div>
      <div className={`  px-2 py-1  ${isMobile ? "text-[2.5vw] leading-tight w-[100%]" : "w-[80%]  text-center leading-5"}  h-[50%] rounded-md mt-[10%] overflow-hidden`}>
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