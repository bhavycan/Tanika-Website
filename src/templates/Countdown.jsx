import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";

const Countdown = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          intervalRef.current = setInterval(() => {
            setCount((prev) => (prev >= 50 ? prev : prev + 1));
          }, 50);
        } else {
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      aria-label="Animated client count"
      className={`w-full h-full px-5 text-black flex relative justify-center`}
    >
      <motion.h2
        role="status"
        aria-live="polite"
        className={`font-serif absolute flex items-center justify-center ${
          isMobile ? "top-0 text-[22vw] h-[22vw]" : "-top-20 text-[20vw] h-[20vw]"
        }`}
      >
        {count}
        <motion.span
          initial={{ opacity: 0, scale: 2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          aria-hidden="true"
          className="inline-block text-[10vw] font-bold absolute -top-[20%] left-[100%]"
        >
          +
        </motion.span>
      </motion.h2>
    </section>
  );
};

export default Countdown;
