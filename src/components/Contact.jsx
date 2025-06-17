import gsap, { ScrollTrigger } from 'gsap/all'
import { motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const mobileName = ["Contact", "Us"]
  const aitag = ["Trust with", "Transparency"]
  const name = ["Contact Us"]
  const [isMobile, setIsMobile] = useState(false);
  const parent = useRef(null)
  useEffect(() => {


    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
  
    checkMobile();
    window.addEventListener('resize', checkMobile);

    gsap.registerPlugin(ScrollTrigger);
  
    // Cleanup existing ScrollTrigger to avoid duplication
    
  


     
      var tl = gsap.timeline({
        scrollTrigger:{
          trigger : parent.current,
          start : "top 0%",
          end : "bottom -150%",
          scrub : true,
          pin : true,
          markers : true
        }
      })

      tl.to(parent.current,{
        x: isMobile ? "-51%" : "-50%",
        duration : isMobile ? .5 : 1,
        ease : "power.inOut",
       
      })

      return () => {
        window.removeEventListener('resize', checkMobile);
        tl.kill(); // Kill GSAP timeline to prevent duplicate animations
      };


     
  },[isMobile])

  return (
    
    <div ref={parent}  className={`  ${isMobile ? " w-[200%] h-[100vh]" : "w-[200%] h-[100vh]"} overflow-hidden  text-black mt-20  flex  `}>
  
      <div  className={`imagecontainer  px-5 pt-5 pb-8  ${isMobile ? " w-[100%] h-full " : "w-[200%]   h-full"}  `}>
       {!isMobile && (<img className='w-full h-[100%] -z-10  object-cover' src="/images/contact.png" alt="" />)} 
       {isMobile ? ( <div className='w-[50%] h-full top-5   pt-5 pb-8  absolute z-10'>
      
          
          <div className='w-[90%]  h-[65vh]  flex items-center justify-center relative'>
          
            
             <motion.img
             initial={{scale: 2}}
             whileInView={{scale :1}}
             transition={{duration : 1}}
             
             className='w-[80%] h-full object-cover absolute   ' src="./images/mobile.png" alt="" />
             
          </div>
          <div className="title w-full mt-5">
              { aitag.map((item, index) => {
                return (
                  <h1 
                    key={index}
                    className={`uppercase border-l-4 pl-3 border-black overflow-hidden 
                   flex items-center justify-start
                      text-[10vw] h-[11vw]
                        
                    `}
                  >
                    <motion.span
                      initial={{ y: 0, rotate: 45, transformOrigin: "left", opacity: 0 }}
                      whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className='inline-block font-["Seasons"] '
                    >
                      {item}
                    </motion.span>
                  </h1>
                )
              })}
          </div>
        

          <div className="tag w-[90%] leading-5 mt-2 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab culpa perferendis consequuntur accusantium, nostrum natus.</div>
        </div>) : (<></>)}
       
      </div>
      <div className={`content  h-full text-black mt-5 ${isMobile ? "w-[100%] ml-5": "w-[100%]"}`}>
    <div className={isMobile ? "title w-full leading-10" : "title w-full leading-[6vw]"}>
              { (isMobile? mobileName : name).map((item, index) => {
                return (
                  <h1 
                    key={index}
                    className={`uppercase border-l-4 pl-3 border-black overflow-hidden ${
                      isMobile 
                        ? 'text-[15vw] h-[13.5vw]' 
                        : 'text-[8vw] h-[6.5vw]'
                    }`}
                  >
                    <motion.span
                      initial={{ y: 0, rotate: 45, transformOrigin: "left", opacity: 0 }}
                      whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className='inline-block font-["Seasons"] mt-3 '
                    >
                      {item}
                    </motion.span>
                  </h1>
                )
              })}

               <div className="sub-title mt-2 flex items-center text-left justify-start opacity-80">Ready to makeover? Call us</div>
            </div>
              <motion.div
              initial = {{opacity : 0, x : 50}}
              whileInView = {{opacity : 1, x: 0}}
              transition={{ duration : 1, delay : 0.5 }}
              className="info w-full h-[50%] px-3 py-3">
              <div className={`part w-full flex items-center  ${isMobile ? "gap-6 mt-[10%]": "gap-4 mt-[5%]"}`}>
              <i className={`ri-phone-fill  ${isMobile ? "text-[6vw]": "text-[2vw]"}`}></i>
              <h1 className="text-xl w-full font-semibold opacity-50"> <a href="tel:+917383838877">+91 7383838877</a></h1>
              </div>
              <div className={`part w-full flex items-center  ${isMobile ? "gap-6 mt-[5%]": "gap-4"}`}>
              <i className={`ri-mail-fill  ${isMobile ? "text-[6vw]": "text-[2vw]"}`}></i>
              <h1 className="text-xl font-semibold opacity-50"> <a href="mailto:bhavy203@gmail.com">Email Us</a></h1>
              </div>
              <div className={`part w-full flex items-center  ${isMobile ? "gap-6 mt-[5%]": "gap-4"}`}>
              <i className={`ri-map-pin-fill  ${isMobile ? "text-[6vw]": "text-[2vw]"}`}></i>
              <h1 className="text-xl font-semibold opacity-50"> <a target='_blank' href="https://www.google.com/maps/place/TANIKA+HOME+DECOR+%26+FURNISHING/@23.114447,72.5401888,16z/data=!4m16!1m9!3m8!1s0x395e83b3fdca6477:0x1a712dca5772d198!2sTANIKA+HOME+DECOR+%26+FURNISHING!8m2!3d23.1142289!4d72.5401798!9m1!1b1!16s%2Fg%2F11q47_h70x!3m5!1s0x395e83b3fdca6477:0x1a712dca5772d198!8m2!3d23.1142289!4d72.5401798!16s%2Fg%2F11q47_h70x?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D">SHOP 118, GANESH GLORY, 11, Jagatpur Rd, Gota, Ahmedabad, Gujarat 382470, India</a></h1>
              </div>
              <div className={`part w-full flex items-center gap-4 ${isMobile ? "mt-[10%]": ""}`}>
           <a target='_blank' href="https://www.facebook.com/profile.php?id=100095570019444">   <i className={`ri-facebook-box-fill  ${isMobile ? "text-[7vw]": "text-[2vw]"}`}></i></a> 
           <a target='_blank' href="https://www.instagram.com/tanika_home_decore/"> <i className={`ri-instagram-fill  ${isMobile ? "text-[7vw]": "text-[2vw]"}`}></i>
           </a>
             
              </div>
             
             

              </motion.div>
      </div>
      
    </div>
    
  )
}

export default Contact