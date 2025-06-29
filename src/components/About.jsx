import gsap, { ScrollTrigger } from 'gsap/all';
import { motion } from 'motion/react';
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';

const About = () => {
  const isMobile = useIsMobile();
  const name = ["Who", "we", "are?"];
  const mobileName = ["What", "is our", "mission?"];

  return (
    <section 
      className={`w-full text-black overflow-hidden pointer-events: none px-4 md:px-8 ${
        isMobile ? 'flex flex-col gap-6 py-0 -mt-[40%]' : ' py-6 flex gap-[2%] '
      }`}
    >
      <motion.figure
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className={isMobile ? "pic w-full h-64 " : "pic w-[70%]"}
      >
        <img 
          className="img w-full h-full object-cover" 
          src="/images/about.png" 
          alt="About us" 
        />
      </motion.figure>

      <article className={isMobile ? "text w-full mt-4" : "text w-[30%]"}>
        <header className={isMobile ? "title w-full leading-10" : "title w-full leading-[6vw]"}>
          {(isMobile ? mobileName : name).map((item, index) => (
            <h1 
              key={index}
              className={`uppercase border-l-4 pl-3 pt-2 border-black overflow-hidden ${
                isMobile 
                  ? 'text-[15vw] h-[13.5vw]' 
                  : 'text-[8vw] h-[6.5vw]'
              }`}
            >
              <motion.span
                initial={{ y: 0, rotate: 45, transformOrigin: "left", opacity: 0 }}
                whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='inline-block font-["Seasons"]'
              >
                {item}
              </motion.span>
            </h1>
          ))}
        </header>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`mt-5 font-["Arvo",serif] ${isMobile ? 'text-[4vw]' : ''}`}
        >
          Tanika Associates is a leading design and build firm in Ahmedabad, specializing in architecture, interior design, and turnkey project execution. We have successfully completed over 50 residential, commercial, and industrial projects in just one year. Our services include electrification, civil work, custom furniture, false ceilings, decorative painting, and design visualization. Every project combines functionality with aesthetic appeal, tailored to meet each client’s unique vision. Known for our innovation, transparency, and timely delivery, Tanika Associates is a trusted partner from concept to completion.
        </motion.p>
      </article>
    </section>
  );
};

export default About;
