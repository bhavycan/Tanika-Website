import { motion } from 'framer-motion'
import React, { useMemo, useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'


const QuestionCard = ({ card }) => {
  const [isFlipped, setFlipped] = useState(false)
  const isMobile = useIsMobile()

  const handleClick = () => {
    setFlipped(prev => !prev)
  }

     const audio = useMemo(() => {const sound = new Audio('/audio/cardflip.mp3'); sound.volume = 0.3; return sound}, [])

  const playSound = () => {
    audio.currentTime = 0 
    audio.play()
  }

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onClick={() => {handleClick(), playSound()}}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() }}
      className={`rounded-lg ${isMobile ? 'w-[80%] h-[50vh]' : 'w-[20%] h-[50vh]'} relative cursor-pointer`}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileTap={{ scale: 0.5 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full relative"
      >
        {/* Front Side */}
        <section
          className="absolute w-full h-full backface-hidden shadow-2xl px-2 py-2 text-center flex items-center justify-center rounded-lg overflow-hidden text-white text-xl font-['font123'] font-bold"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <figure className="image-container absolute w-fuvll -z-10 h-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              loading="lazy"
              src="/images/playing-card-front.webp"
              alt="Card front background"
            />
          </figure>
          <span>{card.front}</span>
        </section>

        {/* Back Side */}
        <section
          className="absolute w-full h-full shadow-2xl px-2 py-2 rounded-lg text-center flex items-center justify-center text-md font-serif overflow-hidden"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <figure className="image-container absolute w-full -z-10 h-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              loading="lazy"
              src="https://i.pinimg.com/736x/1e/59/e2/1e59e2ddcf52f8856f1a2da458bb823c.jpg"
              alt="Card back background"
            />
          </figure>
          <span>{card.back}</span>
        </section>
      </motion.div>
    </article>
  )
}

export default QuestionCard
