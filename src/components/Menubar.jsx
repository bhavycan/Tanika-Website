import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const Menubar = ({ menuOpen, setMenuOpen }) => {
  const pageName = ["Portfolio", "Services", "Partners", "FAQs"];
  const isMobile = useIsMobile();

  // simpler slicer using Array.from
  const slicer = (name) => Array.from(name);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, zIndex: 50 }}
      exit={{ x: -100, opacity: 0, transition: { duration: 1 } }}
      transition={{ duration: 1, ease: [0.68, -0.6, 0.32, 1.6] }}
      className={`text-black absolute z-50 overflow-hidden top-5 w-full h-full ${
        isMobile ? "pl-0" : "pl-4"
      } pt-4 rounded-xl ml-5 menu-container bg-red-100`}
      role="menu"
      aria-label="Main menu"
    >
      <div className="menu w-full h-full absolute -z-10 top-0 left-0">
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Menu background"
        />
      </div>
      <div className="w-full h-[98%] relative z-10">
        <motion.div
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setMenuOpen(false);
            }
          }}
          whileTap={{ scale: 1.1, rotate: 90, transition: { duration: 0.5 } }}
          whileHover={{
            scale: 1.1,
            rotate: 90,
            color: "#A1045A",
            transition: { duration: 0.5 },
          }}
          className="ml-10 absolute right-0 top-5 mr-[2vw] w-12 h-12 shadow-lg flex items-center justify-center rounded-full cursor-pointer select-none"
          aria-label="Close menu"
        >
          <i
            className={`ri-close-line ${isMobile ? "text-[6vw]" : "text-[3vw]"}`}
            aria-hidden="true"
          ></i>
        </motion.div>

        <motion.div
          whileTap={{ scale: 1.2, transition: { duration: 0.5 } }}
          className={`menu flex items-center ${
            isMobile ? "text-[6vw]" : "text-[1.5vw]"
          } gap-2 ml-5 mt-3`}
        >
          <i className="ri-menu-line text-black font-semibold" aria-hidden="true"></i>
          <h2 className="text-black uppercase font-semibold">Menu</h2>
        </motion.div>

        <div className="main-container relative py-2 w-[96%] h-[50%] flex flex-col mt-10">
          {pageName.map((item, i) => (
            <div
              key={i}
              className="cont w-full h-[25%] flex flex-col"
              role="none"
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="names h-[70%] w-[90%] ml-5 flex items-center justify-start"
                role="menuitem"
                tabIndex={0}
                onClick={() => setMenuOpen(false)}
              >
                <motion.h1 whileHover={{ y: -10, x: 10 }} className="h-full w-full flex items-center">
                  {slicer(item).map((char, index) => (
                    <div
                      key={index}
                      className="font-['Seasons'] flex items-center justify-start overflow-hidden"
                    >
                      <motion.span
                        initial={{ x: -100, opacity: 0, fontSize: "5vw" }}
                        animate={{
                          x: 0,
                          opacity: index === 0 ? 1 : 0.7,
                          fontSize: isMobile
                            ? index === 0
                              ? "10vw"
                              : "9vw"
                            : index === 0
                            ? "5vw"
                            : "4vw",
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
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    </div>
                  ))}
                </motion.h1>

                <motion.div
                  className={`rounded-lg ${
                    isMobile ? "text-[6vw]" : "text-[2vw]"
                  }`}
                  whileTap={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
                  whileHover={{ y: -20, x: 20, opacity: 0.6 }}
                  aria-hidden="true"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </motion.div>
              </Link>

              <motion.div
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "90%", opacity: 1 }}
                transition={{ duration: 2, delay: i * 0.2 }}
                className="line ml-5 h-0.5 bg-black"
              ></motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Menubar;
