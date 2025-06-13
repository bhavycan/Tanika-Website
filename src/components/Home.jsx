
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menubar from "./Menubar";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const heading = ["Future", "Family", "Home"];
  const para = [
    "Home design and furniture company specializes in",
    "crafting modern, functional, and stylish interiors tailored",
    "to your lifestyle. We combine innovative design with high",
    "quality, custom-made furniture to transform houses into",
    "personalized homes.",
  ];
 
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-container") && !event.target.closest(".menu-button")) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div 


    className="w-full  min-h-[100vh] overflow-hidden">
      <div
        data-scroll
        data-scroll-speed={isMobile ? " " : "1"}
        className={`image w-full  absolute z-10 overflow-hidden -top-10 ${isMobile ? "h-[120vh] " : "h-[150vh]" }  `}
      >
        <img
          className={`${isMobile ? "object-cover object-[30%_75%]" : "object-cover "} w-full h-full relative `}
          src="/images/livingroom.png"
          alt=""
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="navbar relative w-full mt-5 px-4 md:px-10 z-10 flex items-center justify-between"
        style={{ height: isMobile ? "80px" : "128px" }}
      >
        <div
          className={`name text-white font-semibold uppercase leading-tight ${
            isMobile ? "text-sm" : "text-[1.5vw]"
          }`}
        >
          <h1 className="w-fit border-b-2 py-0.5 border-white">tanika</h1>
          <h1 className="border-b-2 border-white py-0.5">associate</h1>
        </div>

        <div
          className={`logo absolute ${
            isMobile
              ? "left-1/2 -translate-x-1/2 top-12 w-24 h-24"
              : "left-[45%] top-10 w-32 h-32"
          }`}
        >
          <img
            className="w-full h-full object-cover"
            src="/images/logo.png"
            alt=""
          />
        </div>
      
        <motion.div 
        whileTap={{scale : 1.2, transition: {duration : 0.5}}} 
     onClick={() => {toggleMenu()}}
        className="menu-button flex items-center gap-2">
          <h2
            className={`text-white uppercase font-semibold ${
              isMobile ? "text-sm" : "text-[1.5vw]"
            }`}
          >
            Menu
          </h2>

      
          <i
            className={`ri-menu-line text-white font-semibold ${
              isMobile ? "text-sm" : "text-[1.5vw]"
            }`}
          ></i>
       
        </motion.div>
            
      </motion.div>

      <div className="center-text w-full mt-20 md:mt-12 relative z-10 text-center px-4">
        <div
          className={`title flex gap-2 md:gap-6 w-full justify-center items-center ${
            isMobile ? "h-16" : "h-32"
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${
              isMobile ? "text-[12vw]" : "text-[7vw]"
            } font-['Brittany']`}
          >
            We make
          </motion.h1>

          <motion.div
            className={`${
              isMobile ? "text-[12vw] mb-2" : "text-[9vw] mb-6"
            } tracking-tight relative font-['Italiana',sans-serif] text-[#2e2319] ${
              isMobile ? "h-16" : "h-32"
            } overflow-hidden`}
          >
            {heading.map((item, index) => {
              return (
                <motion.h1
                  key={index}
                  initial={{ y: 130, opacity: 0.5 }}
                  animate={{ y: isMobile ? -180 : -300, opacity: 1 }}
                  transition={{ duration: 5, ease: [0.34, 1.56, 0.7, 0.85] }}
                  className={`${isMobile ? "mt-5" : "-mt-10"}`}
                >
                  {item}
                </motion.h1>
              );
            })}
          </motion.div>
        </div>

        <div
          className={`center-para w-full leading-tight ${
            isMobile ? "h-auto mt-6 text-sm" : "h-28 leading-5"
          }`}
        >
          {para.map((item, index) => {
            return (
              <h1 key={index} className={`font-serif overflow-hidden  ${isMobile ? "text-[3.5vw]  w-full" : ""} `}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="inline-block w-[65%]"
                >
                  {item}
                </motion.span>
              </h1>
            );
          })}
        </div>
      </div>

      <div className={`scroll w-full z-10 ${isMobile ? "mt-[10%]" : "mt-6"}`}>
        <h3 className="w-full text-center relative z-10">Scroll down</h3>
        <div
          className={`${
            isMobile ? "w-8 h-8 " : "w-12 h-12"
          } rounded-full relative  z-30 left-1/2 -translate-x-1/2 mt-1 flex items-center justify-center bg-white`}
        >
          <i
            className={`ri-arrow-down-line ${
              isMobile ? "text-base z-30" : "text-[2vw]"
            } text-black`}
          ></i>
        </div>
      </div>
      <AnimatePresence >
      {menuOpen && (
              <div className={`menu-container ${isMobile ? "w-[89%] h-[85vh] " : "w-[30%] h-[95vh] " }    absolute z-50 top-0 left-0`}>
                <Menubar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              </div>
            )}

</AnimatePresence>
       
    </motion.div>
    
  );
};

export default Home;
