import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'motion/react';
import React, { useEffect, useRef } from 'react';
import Countdown from '../templates/Countdown';
import { Link } from 'react-router-dom';
import useIsMobile from '../hooks/useIsMobile';

const Work = () => {
  const isMobile = useIsMobile();
  const parent = useRef(null);
  const projects = [
    "Avani Prastha, Sargasan Gandhinagar",
    "Ganesh Pride, Vaishnodevi Circle",
    "Infinity Luxuria, Science City",
    "Astha Inox, Bhuyangdev ",
    "Indraprasth Green, Satellite",
    "Chharodi Village",
    "Aristo Alayam, Gota",
    "Atharv Landmark, Chenpur",
    "Malabar Exotica, Tragad ",
    "Aristo Anandam, Tragad",
    "Parmeshwar Nilayam, Tragad",
    "Avikam Giriraj, Zundal And Many More...."
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: isMobile ? 'top 0%' : 'top 0%',
        end: 'bottom -150%',
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    if (isMobile) {
      tl.to('.workvideo', {
        scale: 0,
        duration: 1,
        opacity: 0,
        ease: 'power.inOut',
      });
    }

    tl.to('.work', {
      rotateZ: 90,
      rotateY: 90,
      rotateX: 90,
      scale: 5,
      duration: 1,
      opacity: 0,
      ease: 'power.inOut',
    });

    tl.to('.work-part', {
      onStart: () => {
        document.querySelector('.work-part')?.classList.remove('hidden');
      },
      scale: 1,
      duration: 1,
      opacity: 1,
      ease: 'power.inOut',
      y: 50,
      x: 0,
      transformOrigin: 'center',
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <section ref={parent} className="main w-full relative h-[100vh] mb-20 overflow-hidden">
      <header className="w-full h-[100vh] relative flex items-center justify-center px-6 py-3 text-black overflow-hidden">
        {isMobile && (
          <figure className="workvideo absolute w-full p-3 h-full">
            <video
              playsInline
              muted
              autoPlay
              loop
              preload="auto"
              className="w-full h-full object-cover"
              id="bgVideo"
              src="/videos/work.mp4"
            ></video>
          </figure>
        )}

        <div className={`container w-full relative h-full flex flex-col items-center ${isMobile ? 'justify-center' : ''}`}>
          <h1 className="work font-['font123'] text-[28vw] h-fit overflow-hidden">
            <motion.span
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              work
            </motion.span>
          </h1>
        </div>
      </header>

      <article className={`work-part hidden top-[0%] ${isMobile ? 'flex-col' : ''} opacity-0 absolute flex items-center justify-center gap-2 w-full h-[90dvh] min-height-[90vh]`}>
        <aside className={`countdown ${isMobile ? 'w-[100%] h-[35%]' : 'w-[50%] h-full justify-center'} flex items-center flex-col`}>
          <div className={`${isMobile ? 'w-[40%] h-[50%]' : 'w-[50%] h-[40%]'} flex items-center justify-center`}>
            <Countdown />
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`text-below w-[80%] ${isMobile ? 'text-center text-sm leading-4' : 'text-center text-xl leading-6'} opacity-60 font-serif text-black`}
          >
            <p>
              We’ve proudly completed 50+ projects in just one year, spanning residential, commercial, and industrial spaces. Each project reflects our commitment to quality, creativity, and timely execution. This milestone stands as proof of the trust our clients place in us and the efficiency of our expert team.
            </p>
          </motion.div>
        </aside>

        <main className={`${isMobile ? 'flex-col h-[75%] w-[100%]' : 'w-[50%] h-full'} site-name flex items-center`}>
          <div className={`${isMobile ? 'w-full h-[90%] items-center' : 'w-[40%] h-fit items-start justify-center'} flex flex-col`}>
            {projects.map((item, index) => (
              <div key={index} className="w-fit shadow-lg border-b-2 border-black h-fit flex flex-col items-center">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, transition: { duration: 0.1 }, color: 'black' }}
                  className={`w-fit ${isMobile ? 'text-[4vw] h-[4vh]' : 'text-[1vw] h-[5vh]'} text-gray-600 flex items-center justify-start`}
                >
                  {item}
                </motion.h1>
              </div>
            ))}
          </div>
          <section className={`${isMobile ? 'w-[100%] gap-[2%]' : 'w-[50%] flex-col'} flex items-center justify-center text-black leading-8`}>
            <h1 className={`${isMobile ? 'text-[4vw]' : 'text-[2vw]'} font-serif opacity-80`}>Check Out Our</h1>
            <Link to={'/portfolio'}>
              <div className="w-full flex items-center justify-center">
                <h1 className={`${isMobile ? 'text-[9vw]' : 'text-[4vw] mt-3'} font-['font123']`}>
                  Portfolio
                </h1>
                <motion.div
                  className={`rounded-lg ${isMobile ? 'text-[6vw]' : 'text-[4vw]'}`}
                  whileTap={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                  whileHover={{ y: -20, x: 20, opacity: 0.6 }}
                >
                  <i className="ri-arrow-right-up-line"></i>
                </motion.div>
              </div>
            </Link>
          </section>
        </main>
      </article>
    </section>
  );
};

export default Work;
