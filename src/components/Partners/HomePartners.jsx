import { motion } from 'framer-motion';
import { easeIn } from 'motion/react';
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import useIsMobile from '../../hooks/useIsMobile';

const HomePartners = () => {
  const isMobile = useIsMobile();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <section className="w-full h-[100vh] flex flex-col items-center relative justify-center">
      <motion.div
        ref={scrollRef}
        data-scroll-container
        className={`main-container relative rounded-3xl overflow-hidden ${
          isMobile ? 'w-[90%] h-[60%] shadow-2xl' : 'w-[60%] h-[70%]'
        }`}
      >
        {isMobile && (
          <div className="w-full h-[20%] flex items-center justify-center absolute mt-[20%]">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-[50%] h-full object-cover"
              src="/images/logo-white.png"
              alt="Logo"
            />
          </div>
        )}

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="w-full h-full object-cover"
          src="/images/bedroomback.png"
          alt="Bedroom background"
        />

        <motion.img
          data-scroll
          data-scroll-speed="0.5"
          className={`absolute object-cover z-20 ${
            isMobile ? 'w-full h-[80%] top-[18%]' : 'w-full top-[10%] -left-2 h-full'
          }`}
          src="/images/bed.png"
          alt="Bed"
        />
      </motion.div>

      <div className="absolute top-[15%] w-[60%] h-[80%] flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`flex items-center justify-center text-white font-['Brittany'] rounded-md shadow-lg ${
            isMobile ? 'w-[80%] h-[10%] text-[9vw] bg-[#F58220]' : 'w-[30%] h-[20%] text-[5vw]'
          }`}
        >
          Exclusive
        </motion.h1>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: easeIn }}
          className={`flex items-center justify-center uppercase font-['Seasons'] ${
            isMobile ? 'w-full h-[20%] mt-[55%] text-[18vw]' : 'w-full h-[40%] text-[18vw]'
          }`}
        >
          Partners
        </motion.h1>

        <div className="relative w-[80%] h-[15%] flex items-center justify-center z-30 font-serif">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full h-full absolute -top-[20%]"
            src="https://mysleepwell.com/static/img/logo.svg"
            alt="Partner logo"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
