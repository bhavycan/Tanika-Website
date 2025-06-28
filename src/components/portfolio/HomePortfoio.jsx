import { color, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const HomePortfoio = () => {
  const title = ["work", "that", "speaks!"];

   const isMobile = useIsMobile()

  return (
    <div className="w-full h-[100vh]  relative flex items-center  justify-center overflow-hidden  ">

      <div className={` ${isMobile ? "flex-col w-[85%] h-[90%] " : "items-center w-[80%] h-[80%]"}  flex   justify-center`}>
      <div className={`left  ${isMobile ? "w-[100%] h-[50%] " : "w-[50%] h-[100%] "}     `}>
        <motion.div className="w-[100%]  h-[65%]  text-black   ">
          {title.map((item, index) => {
            return (
              <div className={`w-full ${isMobile  ? "h-[30%]" : "h-[9vw]"}   flex items-center justify-center  relative`}>
                <motion.h1
                  initial={{x: -5, y: 5, opacity: 0}}
                whileInView={{x : 5, y : -5, opacity: 1}}
                transition={{duration: 1}}
                className={`w-full  uppercase ${isMobile  ? "text-[22vw]" : "text-[10vw] justify-end"}   flex items-center  `}>
                  {item}
                </motion.h1>
                <motion.h1 
                initial={{x: 10, y: -10, opacity: 0}}
                whileInView={{x : -5, y : 5, opacity: .1}}
                transition={{duration: 1}}
                className={`w-full absolute top-7 left-1 ${isMobile ? "text-[22vw] h-[30%] " : "text-[10vw]  h-[30%] justify-end"}    uppercase   flex items-center  `}>
                  {item}
                </motion.h1>
              </div>
            );
          })}
        </motion.div>

        <motion.div
                       initial= {{ scaleX : 0,transformOrigin : isMobile ? "left" :"right", opacity : 0}}
                       whileInView={{scaleX : isMobile ? 1 : .82, opacity: 1 }}
                       transition={{duration: .8, ease: "easeInOut"}}
                      
                      className="line w-[100%]  h-[1px] bg-black opacity-80"></motion.div>

        <div className={`para w-[100%] h-[30%] flex ${isMobile ? "leading-4" : ""} pt-[3%] justify-end text-right   font-semibold`}>
          <motion.h2
          initial={{x: -10,opacity : 0}}
          whileInView={{opacity : .8, x: 0}}
          transition={{duration : 1,delay :1}}
          className={` opacity-70 ${isMobile ? "text-[3.5vw] w-[90%] h-full" : "text-[1.1vw] w-[90%]"} `}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla amet
            ipsam quia at sequi facere nemo laudantium consequatur, doloribus
            quidem voluptatum a repudiandae, veritatis, et sit atque tempora
            perspiciatis? Labore modi asp
          </motion.h2>
        </div>
      </div>
      <div className={`right ${isMobile ? "w-[100%] h-[50%]  items-center justify-end" : "w-[50%] h-full item-center justify-start"}  pt-1  pl-[2%] flex `}>
       
        <div className={`image ${isMobile ? "w-[90%] h-[100%] " : "w-[75%] h-[86%]"}   relative shadow-2xl`}>
        <motion.div 
        initial={{rotate: 180}}
        whileInView={{rotate : 0}}
        transition={{duration: 1}}
        className={`circle  ${isMobile ? "w-[35%] h-[32%] -top-[5%] right-[80%]" : "w-[40%] h-[30%] -top-[10%] left-[80%]"} flex items-center justify-center rounded-full  absolute  bg-[#D22935]`}>
        <i className={`ri-arrow-down-line ${isMobile ? "text-[10vw]" : "text-[2vw]"}  text-white`}></i>
        </motion.div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1516962080544-eac695c93791?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePortfoio;
