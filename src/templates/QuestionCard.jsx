import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
const QuestionCard = ({card}) => {
  const [isFlipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(prev => !prev)
  }

    const [isMobile, setIsMobile] = useState(false);
  
    
      useEffect(() => {
          const checkMobile = () => {
            setIsMobile(window.innerWidth <= 480);
          };
          
          checkMobile();
          window.addEventListener("resize", checkMobile);
          return () => window.removeEventListener("resize", checkMobile);
        }, []);

  return (
    <div
      onClick={handleClick}
      className={` rounded-lg ${isMobile ? "w-[80%] h-[50vh]" : "w-[20%] h-[50vh]"}  relative`}
      style={{ perspective: '1000px' }} 
    >
      <motion.div
      whileTap={{scale : .5}}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        <div
          className="absolute w-full h-full backface-hidden shadow-2xl  px-2 py-2 text-center flex items-center justify-center rounded-lg overflow-hidden text-white text-xl font-['Seasons'] font-bold"
          style={{ backfaceVisibility: 'hidden' }}
        >
            <div className="image-container absolute w-full -z-10 h-full overflow-hidden">
                 <img className='w-full h-full object-cover ' loading='lazy' src="/images/playing-card-front.webp" alt="" />
            </div>
           
         {card.front}
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full shadow-2xl px-2 py-2 rounded-lg text-center flex items-center justify-center text-md   overflow-hidden"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >

                <div className="image-container absolute w-full -z-10 h-full overflow-hidden">
                 <img className='w-full h-full object-cover ' loading='lazy' src="https://i.pinimg.com/736x/1e/59/e2/1e59e2ddcf52f8856f1a2da458bb823c.jpg" alt="" />
            </div>
          {card.back}
        </div>
      </motion.div>
    </div>
  )
}

export default QuestionCard