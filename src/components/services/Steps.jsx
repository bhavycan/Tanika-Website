import { motion } from "framer-motion";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Steps = () => {

  return (
    <>
    <motion.div
            
            className={` z-50  absolute top-10 left-[10%] w-[28vw] h-[35vw] bg-green-500 border-2 border-black`}></motion.div>
            <motion.div
            
            className={` z-50  absolute top-36 left-[20%] w-[28vw] h-[35vw] bg-green-500 border-2 border-black`}></motion.div>
             <motion.div
            
            className={` z-50  absolute top-5 left-[30%] w-[28vw] h-[35vw] bg-green-500 border-2 border-black`}></motion.div>
             <motion.div
            
            className={` z-50  absolute top-56 left-[40%] w-[28vw] h-[35vw] bg-green-500 border-2 border-black`}></motion.div>
              <motion.div
            
            className={` z-50  absolute top-16 left-[50%] w-[28vw] h-[35vw] bg-green-500 border-2 border-black`}></motion.div></>
  );
};

export default Steps;
