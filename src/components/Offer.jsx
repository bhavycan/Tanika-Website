import { motion } from 'motion/react';
import { div, h1 } from 'motion/react-client';
import React, { useEffect, useState } from 'react';

const Offer = ({imagelink}) => {
  const name = ["wonders", "with", "build"];
  const [isMobile, setIsMobile] = useState(false);
  const services = [
    {
      items: ["Electrification", "Furniture", "Civil Work"],
      textSize: isMobile ? "text-[13vw]" : "text-[4vw]",
      gapSize: isMobile ? "gap-5" : "gap-14",
      initialX: 0,
      opacity: 1,
      direction: isMobile ? "-303%" : "-100%",
    },
    {
      items: ["False ceiling", "Decorative painting", "Design Visualizations"],
      textSize: isMobile ? "text-[10vw]" : "text-[2.7vw]",
      gapSize: isMobile ? "gap-2" : "gap-12",
      initialX: isMobile ? "-340.10%" : "-100%",
      opacity: 0.7,
      direction: 0
    },
    {
      items: ["Customized solutions", "Industrial solutions", "Residential solutions"],
      textSize: isMobile ? "text-[8vw]" : "text-[2vw]",
      gapSize: isMobile ? "gap-4" : "gap-24",
      initialX: 0,
      opacity: 0.5,
      direction: isMobile ? "-334.10%" : "-100%",
    }
  ];




  useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 480);
      };
      
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  

  // Reusable Component for Service Rows
  const ServiceRow = ({ items, textSize, gapSize, initialX, opacity, direction }) => (
    <motion.div
      initial={{ x: initialX, opacity: opacity }}
      animate={{x :direction}}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      className="flex items-center shrink-0 whitespace-nowrap"
    >
      {items.map((item, index) => (
        <div key={index} className={`title flex items-center ${gapSize}`}>
          <h1 className={`uppercase  font-semibold ${textSize}`}>{item}</h1>
          <i className={`ri-arrow-right-s-fill ${isMobile ? "text-[6vw]" : "text-[2vw]"}`}></i>
        </div>
      ))}
    </motion.div>
  );

  return (
    <motion.div 
    
    className={`w-full  text-black relative ${isMobile ? "mt-[25%] px-3 h-[90vh] mb-20 pt-3" : "mt-20 py-3 px-6 h-[100vh]  "}   overflow-hidden`}> 
      <div className={`background   ${isMobile ? "h-[95vh] pr-3 " : "h-[100vh]"}  w-[97%] absolute -top-10 -z-20 overflow-hidden`}>
        <img
        
          className='w-full h-full object-cover'
          src={imagelink}
          alt="Background"
        />
      </div>

      <motion.div className="title w-full relative">
        {name.map((item, index) => (
          <h1
            key={index}
            className={`${isMobile  ? "text-[15vw] h-[13.5vw] " : "text-[8vw] h-[6.5vw] "} uppercase border-r-4 pr-3 border-black font-['Seasons'] flex items-center text-right justify-end overflow-hidden`}
          >
            <motion.span
              initial={{ y: 50, rotate: 45, transformOrigin: "right", opacity: 0 }}
              whileInView={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="inline-block mt-4"
            >
              {item}
            </motion.span>
          </h1>
        ))}
        <div className="sub-title mt-2 flex items-center text-right justify-end opacity-80">Our exquisite service</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeIn" }}
        className={`marquediv   ${isMobile ? "mt-20" : "mt-20"} text-black`}
      >
        {services.map((service, index) => (
          <ServiceRow
            key={index}
            items={service.items.concat(service.items)} // Duplicate for seamless marquee
            textSize={service.textSize}
            gapSize={service.gapSize}
            initialX={service.initialX}
            opacity={service.opacity}
            direction={service.direction}
          />
        ))}
      </motion.div>

        {isMobile && ( 
          <div className='w-full h-[80%] mt-4'>
              <img src="/images/homedesign.png" alt="" />
          </div>
        )}
      
    </motion.div>
  );
};

export default Offer;
