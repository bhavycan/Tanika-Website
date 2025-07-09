import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import useIsMobile from '../../hooks/useIsMobile';

const SubPartners = () => {
  const cardinfo = [
    {
      name: "Hardware",
      info: "EBCO hardware ensures sturdy, seamless operation in our cabinets and storage solutions.",
      image: ["/images/partners_images/ebco.webp"],
    },
    {
      name: "Hardware",
      info: "We trust Hettich for smart, smooth, and high-quality furniture fittings.",
      image: ["/images/partners_images/hettich.png"],
    },
    {
      name: "Hardware",
      info: "Olive fittings elevate our kitchens and wardrobes with durable and stylish hardware.",
      image: ["/images/partners_images/olive-logo.webp"],
    },
    {
      name: "Hardware",
      info: "Vita hardware adds strength and modern aesthetics to our doors and windows.",
      image: ["/images/partners_images/vita.png"],
    },
    {
      name: "Electric",
      info: "Our projects include RR Kabel wiring, known for innovation and high safety standards.",
      image: ["/images/partners_images/rr.png"],
    },
    {
      name: "Electric",
      info: "We use Finolex wiring for its proven safety, durability, and trusted quality.",
      image: ["/images/partners_images/finolex.png"],
    },
    {
      name: "Electric",
      info: "We install Elleys’ modular switches known for sleek design and reliable performance.",
      image: ["/images/partners_images/elleys_Logo.png"],
    },
    {
      name: "Plywood",
      info: "Our woodwork features Royale Touché plywood for its premium look and durable, waterproof quality.",
      image: ["/images/partners_images/royal_touch.jpg"],
    },
    {
      name: "Paint",
      info: "We use Asian Paints Royale for its smooth, luxurious finish and long-lasting elegance. ",
      image: ["/images/partners_images/asian_paints.webp"],
    },
  ];

  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest("article")) {
        setActiveIndex(null);
      }
    };

    const timeout = setTimeout(() => {
      setActiveIndex(null);
    }, 2000);

    window.addEventListener("click", handleClickOutside);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [activeIndex]);

  return (
    <section
      className="w-full h-[100vh] flex items-center justify-center relative"
      aria-label="Partner cards"
    >
      <motion.div
        className={`card-container flex items-center relative ${
          isMobile ? "h-full w-full px-5" : "h-[80%] w-[80%]"
        }`}
      >
        {cardinfo.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.article
              key={index}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveIndex(index);
                }
              }}
              initial={{}}
              whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              whileInView={{
                filter: activeIndex !== null && !isActive ? "blur(4px)" : "blur(0px)",
                scale: isActive ? 1.1 : 1,
                y: isMobile
                  ? isActive
                    ? `${index * 10}%`
                    : `${index * 30}%`
                  : isActive
                  ? -40
                  : 0,
                x: isMobile ? `${index * 15}%` : `${index * 35}%`,
                rotateY: isMobile ? 0 : isActive ? -3 : 0,
                rotateZ: isMobile ? 0 : isActive ? -3 : 0,
                transition: {
                  x: { duration: 1, delay: index * 0.3, ease: [0.34, 1.56, 0.64, 1] },
                  y: { duration: 2, delay: index * 0.3, ease: [0.34, 1.56, 0.64, 1] },
                  scale: { duration: 0.3 },
                  rotateY: { duration: 0.3 },
                  rotateZ: { duration: 0.3 },
                },
              }}
              style={{
                top: isMobile ? "0%" : undefined,
                zIndex: isActive ? 100 : index * 10,
                pointerEvents: activeIndex !== null && !isActive ? "none" : "auto",
              }}
              className={`card-deck absolute rounded-lg shadow-2xl bg-white px-2 py-2 flex ${
                isMobile ? "w-[40%] h-[30%]" : "w-[25%] h-[70%]"
              }`}
            >
              <header className="w-[30%] h-full border-r-2 border-y-zinc-200 flex items-center justify-center">
                <h2
                  className={`-rotate-90 w-full h-full flex items-center justify-center ${
                    isMobile ? "text-[9vw]" : "text-[3vw]"
                  } pointer-events-none font-serif`}
                >
                  {item.name}
                </h2>
              </header>
              <section className="w-[70%] h-full flex flex-col items-center">
                <figure className="image w-[80%] h-[30%] rounded-md mt-[10%] overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={item.image[0]}
                    alt={`${item.name} logo`}
                    loading="lazy"
                  />
                </figure>
                <article
                  className={`px-2 py-1 mt-[10%] h-[50%] rounded-md overflow-hidden ${
                    isMobile ? "text-[2.5vw] leading-tight w-full" : "w-[80%] text-center leading-5"
                  }`}
                >
                  <p>{item.info}</p>
                </article>
              </section>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SubPartners;
