import React, { useEffect, useState } from 'react'
import StepPart from './StepPart'

const Siteindexing = () => {

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
    <div className={` ${isMobile ? "w-[90%]" : "w-[70%]"} min-h-[100vh] bg-white`}>
        <StepPart />
    </div>
  )
}

export default Siteindexing