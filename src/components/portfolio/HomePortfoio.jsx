import { color, motion } from "framer-motion";
import React from "react";

const HomePortfoio = () => {
  const title = ["work", "that", "speaks!"];

  const cluster = (string) => {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
      arr.push(string[i]);
    }
    return arr;
  };
  return (
    <div className="w-full h-[100vh]  relative flex items-center justify-center overflow-hidden  ">
      <div className="left w-[50%] h-full  pt-1">
        <motion.div className="w-[100%]   h-[50%] overflow-hidden text-black mt-[15%]  ">
          {title.map((item, index) => {
            return (
              <div className="w-full relative">
                <h1 className="w-full text-[10vw] uppercase  h-[9vw] flex items-center justify-end ">
                  {item}
                </h1>
                <motion.h1 
                initial={{x: 10, y: -10, opacity: 0}}
                whileInView={{x : -5, y : 5, opacity: .1}}
                transition={{duration: 1}}
                className="w-full absolute top-1 left-1   text-[10vw] uppercase  h-[9vw] flex items-center justify-end ">
                  {item}
                </motion.h1>
              </div>
            );
          })}
        </motion.div>

        <motion.div
                       initial= {{ scaleX : 0,transformOrigin : "right", opacity : 0}}
                       whileInView={{scaleX : .82, opacity: 1 }}
                       transition={{duration: .8, ease: "easeInOut"}}
                      
                      className="line w-[100%]  h-[2px] mt-10 bg-black opacity-80"></motion.div>

        <div className="para w-[100%] h-[15%]  mt-2 flex items-center justify-end text-right   font-semibold">
          <h2 className="w-[70%] opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla amet
            ipsam quia at sequi facere nemo laudantium consequatur, doloribus
            quidem voluptatum a repudiandae, veritatis, et sit atque tempora
            perspiciatis? Labore modi asp
          </h2>
        </div>
      </div>
      <div className="right w-[40%] h-full pt-1 mt-[15%] ml-10 flex item-center justify-start">
       
        <div className="image w-[65%] h-[70%]  relative shadow-2xl">
        <motion.div 
        initial={{rotate: 180}}
        whileInView={{rotate : 0}}
        transition={{duration: 1}}
        className="circle w-32 h-32 flex items-center justify-center rounded-full  absolute -top-12 left-[80%] bg-[#D22935]">
        <i className="ri-arrow-down-line text-[2vw] text-white"></i>
        </motion.div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1516962080544-eac695c93791?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePortfoio;
