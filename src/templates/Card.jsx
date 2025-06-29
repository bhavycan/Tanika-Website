import { motion } from "motion/react";
import React from "react";
import useIsMobile from "../hooks/useIsMobile";

const Card = ({ value }) => {
  const isMobile = useIsMobile();

  return (
    <motion.article
      role="group"
      aria-label={`Review by ${value.name}`}
      className="w-full h-full flex flex-col items-center"
    >
      <figure
        className={`rounded-full overflow-hidden ${
          isMobile ? "w-[50%] h-[50%]" : "w-40 h-40"
        }`}
      >
        <img
          src={value.image}
          alt={`Profile of ${value.name}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </figure>

      <h3
        className={`mt-2 font-semibold opacity-70 ${
          isMobile ? "text-[6vw]" : "text-[1.5vw]"
        }`}
      >
        {value.name}
      </h3>

      <p
        className={`text-center font-serif ${
          isMobile
            ? "text-[3vw] w-[90%] leading-[4vw] mt-1"
            : "text-[1.1vw] mt-3 w-[70%]"
        }`}
      >
        {value.review}
      </p>
    </motion.article>
  );
};

export default Card;
