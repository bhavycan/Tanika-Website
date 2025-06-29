import { motion } from 'framer-motion'
import React from 'react'
import useIsMobile from '../hooks/useIsMobile'

const ServiceWorkBanner = () => {
  const background = [
    "ABCDEFGHIJKLMNO",
    "QRSTUVWXYZABCDEF",
    "ABCDEFGHIJKLMNO",
    "QRSTUVWXYZABCDEF",
    "ABCDEFGHIJKLMNO",
    "QRSTUVWXYZABCDEF"
  ]

  const slicer = (name) => name.split('')

  const isMobile = useIsMobile()

  return (
    <section className="w-full h-[100vh] bg-black overflow-hidden">
      <motion.div className="w-full h-full bg-white text-black">
        <div className="flex flex-col w-full h-full">
          {background.map((item, i) => (
            <div key={i} className="w-full flex h-full">
              {slicer(item).map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  whileTap={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`
                    flex items-center justify-center text-center
                    border-2 border-white
                    ${isMobile ? "w-[35vw] h-[35vw] text-[35vw]" : "w-[9vw] h-[9vw] text-[10vw]"}
                  `}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ServiceWorkBanner
