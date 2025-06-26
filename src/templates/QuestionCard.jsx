import { motion } from 'framer-motion'
import React, { useState } from 'react'
const QuestionCard = () => {
  const [isFlipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(prev => !prev)
  }

  return (
    <div
      onClick={handleClick}
      className='w-[20%] h-[50vh] rounded-lg  relative'
      style={{ perspective: '1000px' }} 
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full backface-hidden bg-red-200 rounded-lg flex items-center justify-center text-xl font-bold"
          style={{ backfaceVisibility: 'hidden' }}
        >
          front
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-blue-200 rounded-lg flex items-center justify-center text-xl font-bold"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          back
        </div>
      </motion.div>
    </div>
  )
}

export default QuestionCard