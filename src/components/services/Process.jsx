import React, { useEffect, useRef } from 'react';
import ServiceWorkBanner from '../../templates/ServiceWorkBanner';
import gsap, { ScrollTrigger } from 'gsap/all';
import Steps from './Steps';
import useIsMobile from '../../hooks/useIsMobile';

const Process = () => {
  gsap.registerPlugin(ScrollTrigger);
  const parent = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: 'top 0%',
        end: isMobile ? 'bottom 90%' : 'bottom -300%',
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to('.step-card-container', {
      left: '100%',
      duration: 20,
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      aria-labelledby="process-title"
      ref={parent}
      className="w-full h-[100vh] relative bg-white"
    >
      <header className="w-full h-full flex items-center justify-center">
        <h2
          id="process-title"
          className='text-[6vw] z-40 p-3 font-["font123"] font-semibold text-black'
        >
          Your dream home in 5 steps
        </h2>
      </header>

      <div
        className={`step-card-container h-[100vh] w-[400%] absolute top-0 -left-[400%]`}
        role="region"
        aria-label="Step-by-step process cards"
      >
        <Steps />
      </div>
    </section>
  );
};

export default Process;
