import { animate, easeInOut, motion } from 'framer-motion';
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';

const BuildCard = ({ card, constraints }) => {
  const isMobile = useIsMobile();

  const animatesParams = {
    x: card.id % 2 === 0 ? card.id * 10 : card.id * -10,
    y: card.id % 2 === 0 ? card.id * 10 : card.id * -5,
    rotate: card.id % 2 === 0
      ? card.rotate + card.id * 2
      : card.rotate + card.id * -4,
  };

  return (
    <motion.article
      role="group"
      aria-label={`Build Card for ${card.tag}`}
      drag
      dragElastic={0.3}
      dragConstraints={constraints}
      whileDrag={{ scale: 1.05, zIndex: 999 }}
      initial={{ x: 0, y: 0, rotate: card.rotate }}
      whileInView={animatesParams}
      transition={{ duration: 1, delay: 0.1 * card.id, ease: easeInOut }}
      viewport={{ once: true, amount: 0.5 }}
      className={`absolute rounded-xl bg-white shadow-2xl px-3 py-3 ${
        isMobile ? 'w-[50vw] h-[30vh]' : 'w-[20vw] h-[50vh]'
      }`}
      style={{ top: card.top, left: card.left }}
    >
      <figure className="inside-box w-full h-[85%] overflow-hidden pointer-events-none rounded-3xl">
        <img
          loading="lazy"
          src={card.image}
          alt={card.tag}
          className="w-full h-full object-cover"
        />
      </figure>
      <figcaption
        className={`text-tag flex items-center justify-center font-['Seasons'] h-[15%] py-3 ${
          isMobile ? '' : 'text-[2vw]'
        }`}
      >
        <h2>{card.tag}</h2>
      </figcaption>
    </motion.article>
  );
};

export default BuildCard;
