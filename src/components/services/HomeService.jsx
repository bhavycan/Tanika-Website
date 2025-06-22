import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import ServiceWorkBanner from '../../templates/ServiceWorkBanner';

const HomeService = () => {
    
    const slicer = (name) => {
        const arr = [];
        for (let index = 0; index < name.length; index++) {
          arr.push(name[index]);
        }
        return arr;
      };

const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

     return () => {
      window.removeEventListener("resize", checkMobile);
    };
  },[])


      return (
        <div className="w-full min-h-[100vh] relative overflow-hidden flex items-center justify-center   text-black ">
          <div className="w-full h-full z-10 absolute">
             <ServiceWorkBanner />
          </div>
        
          <div className={`title ${isMobile ? "w-[100%] h-[32vh]" : "w-[50%] h-[45vh] shadow-2xl "}  absolute z-20 flex flex-col  justify-center  items-center  `}>
            <h1 className=' w-fit font-["Seasons"]  text-[#b71437]'> {slicer("Service").map((char, index) => {
                                  return (
                                    
                                      <motion.span
                                        initial={{ x: -100,  
                                            opacity : 0,
                                             fontSize: isMobile ?  "25vw" : "12vw",
                                         }}
                                        animate={{
                                          x: 0,
                                          y : index=== 0 ? "-4%" : 0,
                                          color: index === 0 ? "#A1045A" : "#b71437",
                      opacity: 1,
                     fontSize: isMobile ? (index === 0 ?  "28vw" :  "25vw")  : "12vw",
                                          rotate : index === 0 ? 180 : 0,
                                        }}
                                        whileHover={
                                          index === 0
                                            ? {}
                                            : {
                                                scale: 1.2,
                                                color: "#FECACA",
                                                opacity: 1,
                                                transition: {
                                                  duration: 0.2,
                                                  ease: [0.37, 0, 0.63, 1],
                                                },
                                              }
                                        }
                                        transition={{
                                          duration: 2,
                                          delay: index * 0.2,
                                          ease: [0.68, -0.6, 0.32, 1.6],
                                        }}
                                        className="inline-block  "
                                      >
                                        {char}
                                      </motion.span>
                                  
                                  );
                                })}</h1>

                                <motion.div 
                                initial={{opacity : 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1, delay: 1}}
            className={`para w-[80%] text-center ${isMobile ? "text-[3.5vw]" : "text-[1vw]"}    -mt-[6.5%]  leading-5 font-serif `}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eos quasi recusandae non natus et corrupti quis nemo ab inventore eius, a optio soluta minima sint libero dignissimos. Sunt voluptatibus repudiandae rerum earum deleniti nemo, ullam nam est at numquam?</motion.div>
           
          </div>
          
         
        </div>
      )
}

export default HomeService