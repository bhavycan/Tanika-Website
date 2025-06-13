import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Steps = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const boxConfigs = [
    {
      mobile: "top-[30vh] left-[0%] w-[75vw] h-[55vh]",
      desktop: "top-10 left-[10%] w-[28vw] h-[35vw]",
    },
    {
      mobile: "top-[3vh] left-[20%] w-[75vw] h-[55vh]",
      desktop: "top-36 left-[20%] w-[28vw] h-[35vw]",
    },
    {
      mobile: "top-[35vh] left-[40%] w-[75vw] h-[55vh]",
      desktop: "top-5 left-[30%] w-[28vw] h-[35vw]",
    },
    {
      mobile: "top-[10vh] left-[60%] w-[75vw] h-[55vh]",
      desktop: "top-56 left-[40%] w-[28vw] h-[35vw]",
    },
    {
      mobile: "top-[30vh] left-[80%] w-[75vw] h-[55vh]",
      desktop: "top-16 left-[50%] w-[28vw] h-[35vw]",
    },
  ];

  return (
    <>
      {boxConfigs.map((config, index) => (
        <motion.div
          key={index}
          className={`z-50 absolute bg-green-500 border-2 border-black ${
            isMobile ? config.mobile : config.desktop
          }`}
        />
      ))}
    </>
  );
};

export default Steps;
