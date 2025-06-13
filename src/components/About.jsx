import gsap, { ScrollTrigger } from 'gsap/all'
import { motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const name = ["Who", "we", "are?"]
  const mobileName =  ["What", "is our", "mission?"]
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div 
     
      className={`w-full text-black  overflow-hidden  pointer-events: none  px-4 md:px-8 ${
        isMobile ? 'flex flex-col gap-6 py-0 -mt-[40%]' : ' py-6 flex gap-[2%] '
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className={isMobile ? "pic w-full h-64 " : "pic w-[70%]"}
      >
        <img 
          className='img w-full h-full object-cover  ' 
          src="/images/about.png" 
          alt="About us" 
        />
      </motion.div>
      
      <div className={isMobile ? "text w-full mt-4" : "text w-[30%]"}>
        <div className={isMobile ? "title w-full leading-10" : "title w-full leading-[6vw]"}>
          { (isMobile? mobileName : name).map((item, index) => {
            return (
              <h1 
                key={index}
                className={`uppercase border-l-4 pl-3 pt-2 border-black overflow-hidden ${
                  isMobile 
                    ? 'text-[15vw] h-[13.5vw] ' 
                    : 'text-[8vw] h-[6.5vw]'
                }`}
              >
                <motion.span
                  initial={{ y: 0, rotate: 45, transformOrigin: "left", opacity: 0 }}
                  whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className='inline-block font-["Seasons"]  '
                >
                  {item}
                </motion.span>
              </h1>
            )
          })}
        </div>
        
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`mt-5 font-["Arvo",serif] ${isMobile ? 'text-[4vw] ' : ''}`}
        >
          We are a passionate team of designers and craftsmen dedicated to transforming living spaces with personalized style and functionality. Our mission is to create thoughtfully designed interiors that reflect our clients' tastes, needs, and personalities. With a focus on quality, innovation, and attention to detail, we provide custom furniture and design solutions for homes of all sizes. We believe that every space has the potential to inspire comfort and beauty, and we strive to bring that vision to life. Through collaboration and creativity, we make home design a seamless and enjoyable experience.
        </motion.p>
      </div>
    </div>
  )
}

export default About