import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingHeading = ({ pcheading }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < pcheading[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + pcheading[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setTextIndex((prev) => (prev + 1) % pcheading.length);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex, pcheading]);

  return (
    <section 
      aria-label="Typing heading"
      className="text-[9vw] h-[20vh] font-serif flex items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="inline-block"
      >
        {displayedText}
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline-block"
        >
          |
        </motion.span>
      </motion.h1>
    </section>
  );
};

export default TypingHeading;
