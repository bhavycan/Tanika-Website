import { mirrorEasing } from "motion";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Card from "../templates/Card";
import { image } from "motion/react-client";

const Review = () => {
  const reviews = [
    {
      name: "bobob",
      image:
        "https://images.unsplash.com/photo-1609770653328-a4d1dd377970?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, provident dignissimos. Sit nobis ab excepturi maiores illum soluta earum facilis.",
    },
    {
      name: "lololo",
      image:
        "https://images.unsplash.com/photo-1558377235-76f53857000b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, provident dignissimos. Sit nobis ab excepturi maiores illum soluta earum facilis.",
    },
    {
      name: "xoxoxo",
      image:
        "https://images.unsplash.com/photo-1626193082710-a16206f819f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, provident dignissimos. Sit nobis ab excepturi maiores illum soluta earum facilis.",
    },
    {
      name: "brabra",
      image:
        "https://images.unsplash.com/photo-1543084951-1650d1468e2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, provident dignissimos. Sit nobis ab excepturi maiores illum soluta earum facilis.",
    },
    {
      name: "vivava",
      image:
        "https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, provident dignissimos. Sit nobis ab excepturi maiores illum soluta earum facilis.",
    },
  ];

  const [card, setcard] = useState([]);
  const constraintsRef = useRef(null);
  let intervalRef = useRef(null);
  const selectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start interval when in view
          intervalRef.current = setInterval(() => {
            setcard((prev) => {
              if (prev.length >= reviews.length) {
                return prev;
              } else {
                return [...prev, reviews[prev.length]];
              }
            });
          }, 1500);
        } else {
          // Clear interval when out of view
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.1 } // 50% of the section should be visible
    );

    if (selectionRef.current) {
      observer.observe(selectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
      clearInterval(intervalRef.current);
    };

  }, [reviews.length, isMobile]);

  return (
    <div
      ref={selectionRef}
      className={`w-full h-[100vh]   py-3 flex items-center justify-center  overflow-hidden`}
    >
      <div className={`background w-full h-full    text-black  `}>
        <div className="title w-full    leading-[4vw]  px-5  ">
          <h1
            className={` uppercase   border-l-4    border-black font-["Seasons"] overflow-hidden  ${
              isMobile ? "text-[15vw] h-[13.5vw] pl-2" : "text-[8vw] ml-2 pl-3 h-[6.5vw]"
            }  `}
          >
            <motion.span
              initial={{
                y: 0,
                rotate: 45,
                transformOrigin: "left",
                opacity: 0,
              }}
              whileInView={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`inline-block  ${isMobile ? "mt-5 h-full" : "mt-7"} `}
            >
              testimony
            </motion.span>
          </h1>
          <div className={`sub-title  flex items-center text-right  opacity-80 ${isMobile ? "mt-2" : "ml-2"} `}>
            Listen to our Clients
          </div>
        </div>
        <motion.div ref={constraintsRef} className={`playarea flex  h-[70%] ${isMobile ? "flex-col" : ""}   `}>
          <div className={`left-reviews  p-6  ${isMobile ? "w-full h-[80%] mt-3 " : "w-[50%] h-full"} `}>
            {
              <motion.div className="reviws h-full w-full  flex items-center justify-center relative">
                {card.map((item, index) => {
                  return (
                    <motion.div
                      initial={{ y: 50, opacity: 0, rotate: 45, scale: 0.5 }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        rotate: index * 5,
                        scale: 1,
                        transformOrigin: "center",
                
                      }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ rotate: 0 }}
                      whileTap={isMobile ? { zIndex: 100, rotate: 0 } : {}}
                      drag
                      dragConstraints={constraintsRef}
                     key={index}
                      className={`card w-[70%] h-[90%] rounded-xl bg-zinc-100   shadow-2xl   px-3 py-6  absolute  `}
                      style={{ zIndex: card.length + index }}
                    >
                      <Card value={item} />
                    </motion.div>
                  );
                })}
              </motion.div>
            }
          </div>
          <div className={`right-reviews   p-6 ${isMobile ? "w-full h-[20%] " : "w-[50%] h-full"} `}>
            <div className={`text w-full      ${isMobile ? " text-left  mt-10" : "text-right mt-[55%] flex items-center justify-end"}`}>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1, ease: "linear" }}
                className={` leading-5 ${isMobile? "w-[100%] " : "w-[70%]"}`}
              >

              


                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto iste, incidunt rerum facilis nobis labore distinctio
                reprehenderit accusantium delectus ex cupiditate vitae voluptas
                dolorem ratione optio praesentium corrupti. Libero, sunt! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. 
              </motion.h2>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
