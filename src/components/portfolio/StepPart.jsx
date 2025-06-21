import { motion } from 'framer-motion'

import React, { useEffect, useState } from 'react'

const StepPart = () => {
    const [ishover, sethover] = useState(null)
const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 480);
      };
      
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const flats = [
        {
          name: "Malabar Exotica",
          location: "Ahmedabad",
          year: 2002,
          image: "https://images.unsplash.com/photo-1572120360610-d971b9b78830"
        },
        {
          name: "Skyline Heights",
          location: "Bangalore",
          year: 2015,
          image: "https://images.unsplash.com/photo-1599423300746-b62533397364"
        },
        {
          name: "Green Valley",
          location: "Pune",
          year: 2010,
          image: "https://images.unsplash.com/photo-1501183638710-841dd1904471"
        },
        {
          name: "Oceanview",
          location: "Mumbai",
          year: 2018,
          image: "https://images.unsplash.com/photo-1565182999561-18d7dc61bb0b"
        },
        {
          name: "Serenity",
          location: "Hyderabad",
          year: 2020,
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        }
      ];
      
   
  return (
    
    <div className={`main w-full bg-pink-300 ${isMobile ? "" : "mb-[20vh]"}  flex flex-col `}>

    {
        flats.map((item, index) => (
          <motion.div
            key={index}
            onHoverStart={() => sethover(index)}
           
            onHoverEnd={() => sethover(null)}
            className={`steps-part w-full  ${isMobile ? "h-[20vh] px-[2%] py-[1%]" : "h-[8vw] px-12 py-2"} mt-5 bg-yellow-300    flex items-center relative `}
          >
            <div className="name bg-blue-500  w-[50%]  ">
              <motion.h1 
              whileHover={{scale : 1.1, transformOrigin : "left", opacity : 1}}
              className={`w-full  ${isMobile ? "text-[4.5vw]" : "text-[1.8vw]"} opacity-80    flex items-center`}>
                {item.name}
              </motion.h1>
              <div className="w-full h-[20vw] text-[2.5vw]"><h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur optio quaerat nostrum est architecto repudiandae labore assumenda. Mollitia, sapiente vel?</h2></div>
              <motion.div
               initial= {{ scaleX : 0,transformOrigin : "left", opacity : 0}}
               whileInView={{scaleX : .82, opacity: 1 }}
               transition={{duration: .8, ease: "easeInOut"}}
              
              className="line w-full h-[1px] bg-black opacity-80"></motion.div>
            </div>
            <div className="location-year w-[50%] h-full  items-end flex flex-col justify-center">
              <h2 className="text-[1vw]">{item.location}</h2>
              <h3 className="text-[1vw]">{item.year}</h3>
            </div>
      

      {ishover === index ? (<motion.div
              initial={{ opacity: 0, pointerEvents: "none" }}
              animate={{
                opacity: ishover === index ? 1 : 0,
                pointerEvents: ishover === index ? "auto" : "none",
                
                
              }}
              className="z-20 card w-[25vw] absolute rounded-md overflow-hidden shadow-2xl h-[35vw] left-[53%] bg-red-800"
            >

<img src={item.image} alt="" className='w-full h-full object-cover' />
            </motion.div>) : ""}
            
           
          </motion.div>
        ))
      }
      </div>
   
  )
}

export default StepPart