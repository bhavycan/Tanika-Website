import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Menubar = ({ menuOpen, setMenuOpen }) => {
  const pageName = ["Portfolio", "Services", "Partners", "Quote"];
  const slicer = (name) => {
    const arr = [];
    for (let index = 0; index < name.length; index++) {
      arr.push(name[index]);
    }
    return arr;
  };
  return (
    
    <motion.div
     
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, zIndex: 50 }}
      exit={{ x: -100, opacity: 0, transition: { duration: 1 } }}
      transition={{ duration: 1.5, ease: [0.68, -0.6, 0.32, 1.6], delay: 0.2 }}
      className={` text-black absolute z-50  overflow-hidden  top-5  w-[100%] h-[100%] pl-4 pt-4 rounded-xl  ml-5 menu-container bg-red-100`}
    >
      <div className="menu w-full h-full absolute -z-10 bg-green-500 top-0 left-0">
        <img
          className="-full h-full object-cover"
          src="https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="w-full h-[98%] ">
        <motion.div
          whileTap={{ scale: 1.1, rotate: 90, transition: { duration: 0.5 } }}
          whileHover={{
            scale: 1.1,
            rotate: 90,
            color: "#A1045A",
            transition: { duration: 0.5 },
          }}
          onClick={() => setMenuOpen(false)}
          className="ml-10 absolute   right-0 top-5 mr-[2vw] w-12 h-12 shadow-lg flex items-center justify-center rounded-full "
        >
          <i className="ri-close-line text-[3vw]"></i>
        </motion.div>

        <motion.div
          whileTap={{ scale: 1.2, transition: { duration: 0.5 } }}
          className="menu flex items-center text-[1.vw] gap-2 ml-5 mt-3"
        >
          <i className={`ri-menu-line text-black font-semibold `}></i>
          <h2 className={`text-black uppercase font-semibold `}>Menu</h2>
        </motion.div>

        <div className="main-container relative z-10 py-2  w-[96%] h-[50%] flex flex-col  mt-10 ">
          {pageName.map((item, i) => {
            return (
              <div className="cont w-[100%] h-[25%] flex flex-col    ">
                <div
                  key={i}
                  className={`names h-[70%] w-[90%] ml-5  flex  items-center justify-start `}
                >
                  <motion.h1
                    whileHover={{ y: -10, x: 10 }}
                    className=" h-full w-[100%]  text-[5vw]  flex items-center "
                  >
                    {slicer(item).map((char, index) => {
                      return (
                        <div
                          key={index}
                          className={`text-[5vw]  font-['Seasons']  flex items-center justify-start overflow-hidden `}
                        >
                          <motion.span
                            initial={{ x: -100, opacity: 0, fontSize: "5vw" }}
                            animate={{
                              x: 0,
                              opacity: index === 0 ? 1 : 0.7,
                              fontSize: index === 0 ? "5vw" : "4vw",
                            }}
                            whileHover={
                              index === 0
                                ? {}
                                : {
                                    scale: 1.2,
                                    color: "#A1045A",
                                    opacity: 1,
                                    transition: {
                                      duration: 0.2,
                                      ease: [0.37, 0, 0.63, 1],
                                    },
                                  }
                            }
                            transition={{
                              duration: 1,
                              delay: index * 0.2,
                              ease: [0.68, -0.6, 0.32, 1.6],
                            }}
                            className="inline-block  "
                          >
                            {char}
                          </motion.span>
                        </div>
                      );
                    })}
                  </motion.h1>

                  <motion.div
                    className="rounded-lg  text-[2vw]"
                    whileTap={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                    whileHover={{ y: -20, x: 20, opacity: 0.6 }}
                  >
                    <i class="ri-arrow-right-up-line"></i>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ width: "0%", opacity: 0 }}
                  animate={{ width: "90%", opacity: 1 }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                  className="line ml-5   h-0.5 bg-black"
                ></motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Menubar;
