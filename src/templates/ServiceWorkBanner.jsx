
import { motion } from 'framer-motion'
import { div } from 'motion/react-client';
import React from 'react'

const ServiceWorkBanner = () => {
    const background = ["ABCDEFGHIJKLMNO", "QRSTUVWXYZABCDEF", "ABCDEFGHIJKLMNO", "QRSTUVWXYZABCDEF", "ABCDEFGHIJKLMNO", "QRSTUVWXYZABCDEF"];
    const slicer = (name) => {
        const arr = [];
        for (let index = 0; index < name.length; index++) {
          arr.push(name[index]);
        }
        return arr;
      };
  return (
    <div className='w-full h-[100vh] bg-black overflow-hidden '>
        <motion.div 
       

        className="w-full h-full bg-white text-black">
            <div className="flex">
<div className='w-full h-full flex flex-col'>
    {background.map((item,i)=>{
        return(
            <div className="w-full flex">
            {slicer(item).map((char, index) => {
                return (
                    <motion.span 
                    initial={{opacity: 0}}
                    animate={{opacity: 0}}
                    whileHover={{opacity : 1}}
                    whileTap={{opacity : 1}}
                    transition={{duration: 0.5}}
                    key={index} className='w-[9vw] h-[9vw] flex items-center justify-center text-center text-[10vw] border-2 border-white'>
                        {char}
                    </motion.span>
                );
            })}
            </div>
        )
    })}
x

 
    </div>
  

            </div>
            
        {/* <motion.h1 
         initial={{ opacity: 0 }}
         animate={{ opacity: 0 }}
         whileHover={{ scale: 1.1, opacity: 1}}
        className='w-full h-[9vw] flex items-center  text-[10vw] bg-red-200'>ABCDEFGHIJKLMNOP</motion.h1>
        <motion.h1 className='w-full h-[9vw] flex items-center text-[10vw] bg-green-300'>QRSTUVWXYZABCDEF</motion.h1>
        <motion.h1 className='w-full h-[9vw] flex items-center  text-[10vw] bg-red-200'>ABCDEFGHIJKLMNOP</motion.h1>
        <motion.h1 className='w-full h-[9vw] flex items-center text-[10vw] bg-green-300'>QRSTUVWXYZABCDEF</motion.h1>
        <motion.h1 className='w-full h-[9vw] flex items-center  text-[10vw] bg-red-200'>ABCDEFGHIJKLMNOP</motion.h1>
        <motion.h1 className='w-full h-[9vw] flex items-center text-[10vw] bg-green-300'>QRSTUVWXYZABCDEF</motion.h1>*/}
        </motion.div> 
    </div>
  )
}

export default ServiceWorkBanner