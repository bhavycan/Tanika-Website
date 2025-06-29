import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Menubar from "./Menubar";
import TypingHeading from "../templates/TypingHeading";
import LocomotiveScroll from 'locomotive-scroll';
import useIsMobile from "../hooks/useIsMobile";

const Home = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const heading = ["armony", "earth", "ome"];
  const pcheading = ["Heaven", "Hearth", "Home"];

  const para = [
    "Home design and furniture company specializes in",
    "crafting modern, functional, and stylish interiors tailored",
    "to your lifestyle. We combine innovative design with high",
    "quality, custom-made furniture to transform houses into",
    "personalized homes.",
  ];

  const mobilepara = [
    "Home design and furniture company specializes in",
    "crafting modern, functional, and stylish interiors tailored",
    "to your lifestyle. We combine innovative design with ",
    "high quality, custom-made furniture to transform",
    "houses into personalized homes.",
  ];

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

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
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      scroll.destroy();
    };
  }, []);

  return (
    <motion.div
      key="mainPage-loader"
      className="w-full min-h-[100vh] overflow-hidden"
    >
      <main
        data-scroll-container
        ref={scrollRef}
        className="relative w-full min-h-screen"
      >
        <section
          data-scroll
          data-scroll-speed={isMobile ? "" : "1"}
          className={`image w-full absolute z-10 overflow-hidden -top-10 ${isMobile ? "h-[120vh]" : "h-[150vh] "}`}
        >
          <img
            className={`${isMobile ? "object-cover object-[30%_75%]" : "object-cover"} w-full h-full relative`}
            src="/images/livingroom.png"
            alt=""
            loading="lazy"
          />
        </section>

        <header className="navbar relative w-full mt-5 px-4 md:px-10 z-10 flex items-center justify-between" style={{ height: isMobile ? "80px" : "128px" }}>
          <div className={`name text-white font-semibold uppercase leading-tight ${isMobile ? "text-sm" : "text-[1.5vw]"}`}>
            <h1 className="w-fit border-b-2 py-0.5 border-white">tanika</h1>
            <h1 className="border-b-2 border-white py-0.5">associate</h1>
          </div>

          <div className={`logo absolute ${isMobile ? "left-1/2 -translate-x-1/2 top-12 w-24 h-24" : "left-[45%] top-10 w-32 h-32"}`}>
            <img className="w-full h-full object-cover" src="/images/logo.png" alt="" />
          </div>

          <motion.nav
            whileTap={{ scale: 1.2, transition: { duration: 0.5 } }}
            onClick={toggleMenu}
            className="menu-button flex items-center gap-2"
          >
            <h2 className={`text-white uppercase font-semibold ${isMobile ? "text-sm" : "text-[1.5vw]"}`}>Menu</h2>
            <i className={`ri-menu-line text-white font-semibold ${isMobile ? "text-sm" : "text-[1.5vw]"}`}></i>
          </motion.nav>
        </header>

        <section className="center-text w-full mt-14 md:mt-12 relative z-10 text-center px-4">
          <div className={`title flex gap-2 md:gap-6 w-full ${isMobile ? "h-16 flex-col items-start" : "h-32 justify-center items-center"}`}>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={`${isMobile ? "text-[5vw] tracking-tighter ml-6  font-serif" : "text-[7vw] font-['Brittany']"}`}
            >
              We make
            </motion.h1>

            <motion.div
              className={`${isMobile ? "w-[100%] h-[20vh] flex mt-3 items-center text-white justify-center" : "text-[9vw] h-32 mb-6 overflow-hidden"} tracking-tight relative font-["Seasons"]  text-[#2e2319]`}
            >
              {isMobile ? (
                <div className="w-full h-full flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[55vw] w-[40%] h-[22vh] flex items-center text-[#2E2319] justify-center"
                  >
                    H
                  </motion.span>
                  <div className="uppercase mb-2 w-[50%] flex flex-col items-start justify-start">
                    {heading.map((item, index) => (
                      <motion.h1
                        key={index}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, delay: index * 1, ease: [0.22, 1, 0.36, 1] }}
                        className={`flex items-center justify-center ${
                          index === 1
                            ? "text-[10vw] h-[6vh]"
                            : index === 2
                            ? "text-[20vw] h-[8vh]"
                            : "text-[6vw] h-[4vh]"
                        }`}
                      >
                        {item}
                      </motion.h1>
                    ))}
                  </div>
                </div>
              ) : (
                <TypingHeading pcheading={pcheading} />
              )}
            </motion.div>
          </div>

          <div className={`center-para w-full leading-tight ${isMobile ? "h-auto mt-[45%] text-sm text-center" : "h-28 leading-5"}`}>
            {(isMobile ? mobilepara : para).map((item, index) => (
              <h1
                key={index}
                className={`font-serif overflow-hidden ${isMobile ? "text-[3vw]  w-full text-center" : ""}`}
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`inline-block ${isMobile ? "w-[100%]" : "w-[65%]"}`}
                >
                  {item}
                </motion.span>
              </h1>
            ))}
          </div>
        </section>

        <footer className={`scroll w-full z-10 ${isMobile ? "mt-[10%]" : "mt-6"}`}>
          <h3 className="w-full text-center relative z-10">Scroll down</h3>
          <div className={`${isMobile ? "w-8 h-8" : "w-12 h-12"} rounded-full relative z-30 left-1/2 -translate-x-1/2 mt-1 flex items-center justify-center bg-white`}>
            <i className={`ri-arrow-down-line ${isMobile ? "text-base z-30" : "text-[2vw]"} text-black`}></i>
          </div>
        </footer>

        <AnimatePresence>
          {menuOpen && (
            <aside className={`menu-container ${isMobile ? "w-[89%] h-[85vh]" : "w-[30%] h-[95vh]"} absolute z-50 -top-[2%] left-0`}>
              <Menubar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </aside>
          )}
        </AnimatePresence>
      </main>
    </motion.div>
  );
};

export default Home;
