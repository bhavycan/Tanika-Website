import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const Card = ({ value }) => {
  const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
  
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 480);
      };
    
      checkMobile();
      window.addEventListener('resize', checkMobile);


      return () => {
        window.removeEventListener("resize", checkMobile);
        
      };
    }, [isMobile]);
    
console.log(value)
  return (
    <motion.div
     
      className="w-full h-full flex items-center  flex-col"
    >
      <div className={`   rounded-full overflow-hidden ${isMobile ? "w-[50%] h-[50%]" : "w-40 h-40"}`}>
        <img className="w-full object-cover " src={value.image} alt="" />
      </div>
      <h2 className={`name mt-2  font-semibold opacity-70  ${isMobile ? "text-[6vw]" : "text-[1.5vw]"} `}>
        {value.name}
      </h2>
      <div className={`review-text   text-center ${isMobile ? "text-[3.5vw] w-[90%] leading-[4vw] mt-1" : "text-[1.1vw] mt-3 w-[70%]"} `}>{value.review}</div>
    </motion.div>
  );
};

export default Card;
