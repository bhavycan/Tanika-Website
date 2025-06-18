
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Countdown from '../templates/Countdown'
import { div } from 'motion/react-client'
import { Link } from 'react-router-dom'

const Work = () => {
   const [isMobile, setIsMobile] = useState(false);
  const parent = useRef(null)
const projects = [
  "Avani Prastha, Sargasan Gandhinagar",
  "Ganesh Pride, Vaishnodevi Circle",
  "Infinity Luxuria, Science City",
  "Astha Inox, Bhuyangdev ",
  "Indraprasth Green, Satellite",
  "Chharodi Village",
  "Aristo Alayam, Gota",
  "Atharv Landmark, Chenpur",
  "Malabar Exotica, Tragad ",
  "Aristo Anandam, Tragad",
  "Parmeshwar Nilayam, Tragad",
  "Avikam Giriraj, Zundal And Many More...."
];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
  
    checkMobile();
    window.addEventListener('resize', checkMobile);
  
    gsap.registerPlugin(ScrollTrigger);
  
    // Cleanup existing ScrollTrigger to avoid duplication
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  
   



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: isMobile ? 'top 0%' : 'top 0%',
        end: 'bottom -150%',
        scrub: true,
        pin: true,
        markers: false,
      },
    });

isMobile && (tl.to('.workvideo',{
  scale: 0,
  duration: 1,
  opacity: 0,
  ease: 'power.inOut',
 
}))

    
  
    tl.to('.work', {
     
      scale: 10,
      duration: 1,
      opacity: 0,
      ease: 'power.inOut',
    
    });
  
    tl.to('.work-part', {
      scale: 1,
      duration: 1,
      opacity: 1,
      ease: 'power.inOut',
      y: 50,
      x: 0,
      transformOrigin: 'center',
    });

   
  
    return () => {
      window.removeEventListener('resize', checkMobile);
      tl.kill(); // Kill GSAP timeline to prevent duplicate animations
    };
  }, [isMobile]);

  return (
    <div ref={parent} className={`main w-full relative  h-[100vh] mb-20 overflow-hidden`}>
      <div  className=' w-full h-[100vh]  relative flex items-center justify-center  px-6 py-3 text-black overflow-hidden'>



        {isMobile && (<div className="workvideo absolute w-full p-3 h-full ">
          <video autoPlay muted loop className='w-full h-full object-cover' src="/videos/work.mp4"></video>
        </div>)}
      
      <div  className={`container w-full relative  h-full flex   flex-col items-center ${isMobile ? "justify-center" : ""} `}>
        
        <h1 className={`work  font-['Seasons'] text-[28vw]   h-fit overflow-hidden`}>
           <motion.span
                        initial={{ y: -100,  opacity: 0 }}
                        whileInView={{ y: 0,  opacity: 1 }}
                        transition={{ duration: 0.5, delay:  0.2 }}
                        className="inline-block"
                      >
                   work
                      </motion.span>
          </h1>
       
        </div>
      </div>

    
      <div className={`work-part top-[0%] ${isMobile ? "flex-col" : " "}   opacity-0 absolute flex items-center justify-center gap-2 w-full h-[90vh]`}>

    <div className={`countdown ${isMobile ? " w-[100%] h-[40%]" : "w-[50%]  h-full justify-center "}  flex items-center flex-col    `}>
      <Countdown />
      <motion.div 
       initial={{ y: 20 }}
       whileInView={{ y: 0 }}
       transition={{ duration: 1, delay:  1 }}
      className={`text-below w-[80%] ${isMobile ? "text-center  text-sm leading-4 mt-[6%]" : " text-center text-xl leading-6"}    opacity-60   font-serif text-black`}><p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatem deleniti, sunt nostrum laboriosam nulla reprehenderit ut provident magnam similique aperiam expedita veniam aliquid illo ratione atque saepe! Nemo dolor dicta cum optio corrupti minus?</p></motion.div>
    </div>

    <div className={`${isMobile ? "flex-col h-[70%]  w-[100%]" : "w-[50%]  h-full"} site-name  flex  items-center   gap-3 `}>
          <div className={` ${isMobile ? "w-full h-[100%] items-center" : "w-[40%] h-fit items-start"}  flex flex-col  justify-center   `}>
            {projects.map((item,index)=>{
              return(
              <div className='w-fit shadow-lg border-b-2 border-black h-fit flex flex-col items-center'>
 <motion.h1
                initial={{opacity: 0, scale: 0}}
                whileInView={{scale : 1, opacity : 1}}
                transition={{duration : 1, delay : index*0.2}}
                whileHover={{scale: 1.2, transition: { duration: 0.1 }, color : "black"}}
 
 className={`w-fit ${isMobile? "text-[4vw] h-[4vh] " : "text-[1vw] h-[5vh]"}  text-gray-600   flex items-center justify-start`}>{item}</motion.h1>
 
 </div>
              )
            })}
           
          </div>
          <div className={` ${isMobile ? "w-[100%] " : "w-[50%]"} flex items-center justify-center text-black leading-8 flex-col`}>
            <h1 className={`${isMobile ? "text-[4vw]" : "text-[2vw]"}  font-serif opacity-80`}>Check Out Our </h1>
            <Link to={'/portfolio'}>
                 <div className="w-full flex items-center justify-center">
            <h1 className={` ${isMobile ? "text-[9vw]" : "text-[4vw] mt-3"}  font-["Seasons"] `}>Portfolio
             
            </h1>
             <motion.div
                    className={`rounded-lg ${isMobile ? " text-[6vw]" : "text-[4vw]"} `}
                    whileTap={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                    whileHover={{ y: -20, x: 20, opacity: 0.6 }}
                  >
                    <i class="ri-arrow-right-up-line"></i>
                  </motion.div>
                  </div></Link>
       
          </div>
    </div>
          

      </div>
  
    </div>
    
  )
}

export default Work