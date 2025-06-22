import { animate, easeInOut, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const BuildCard = ({ card ,constraint}) => {



  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 480);
      };
      
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  

   const animatesParams = {
    x: card.id % 2 == 0 ? card.id * 10 : card.id * -10, // shift in x-axis
    y: card.id % 2 == 0 ? card.id * 10 : card.id * -5, // shift in y-axis
    rotate:   card.id % 2 == 0 ? card.rotate + card.id * 2 : card.rotate + card.id * -4 ,
  }
  return (
    <motion.div
      drag
      dragElastic={0.3}
       dragConstraints={constraint}
       whileDrag={{ scale: 1.05, zIndex: 999 }}
        initial={{ x: 0, y: 0, rotate: card.rotate }}
        whileInView={animatesParams}
       transition={{duration: 1, delay: 0.1 * card.id, ease: easeInOut}}
       viewport={{ once: true, amount: 0.5 }}
      className={` ${isMobile ? "w-[50vw] h-[30vh]" : "w-[20vw] h-[50vh]"} bg-white shadow-2xl  absolute px-3 py-3 rounded-xl`}
      style={{
        top: card.top,
        left: card.left,
        
      }}
    >
      <div className="inside-box w-full h-[85%] overflow-hidden pointer-events-none rounded-3xl">
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src={card.image}
          alt={card.tag}
          
        />
      </div>
      <div className="text-tag w-full h-[15%] py-3 flex items-center justify-center text-[2vw] font-['Seasons']">
        <h1>{card.tag}</h1>
      </div>
    </motion.div>
  )
}

export default BuildCard
