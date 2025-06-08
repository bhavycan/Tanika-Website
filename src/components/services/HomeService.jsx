import { motion } from 'framer-motion';
import React from 'react'

const HomeService = () => {
    
    const slicer = (name) => {
        const arr = [];
        for (let index = 0; index < name.length; index++) {
          arr.push(name[index]);
        }
        return arr;
      };
      return (
        <div className="w-full min-h-[100vh] overflow-hidden text-white ">
          <img className='absolute -z-10 w-full h-[100vh] object-cover object-[30%_75%]' src="/images/services.png" alt="" />
          <div className="title w-full  flex flex-col  justify-center  ml-[6%]  mt-20">
            <h1 className='text-[18vw] w-fit font-["Seasons"]'> {slicer("Service").map((char, index) => {
                                  return (
                                    
                                      <motion.span
                                        initial={{ x: -100,  fontSize: "25vw",
                                            
                                         }}
                                        animate={{
                                          x: 0,
                                          y: index === 0 ? -20 : 0,
                                         color: index === 0 ? "#A1045A" : "white",
                                          fontSize: index === 0 ? "19vw" : "18vw",
                                          rotate : index === 0 ? 180 : 0,
                                        }}
                                        whileHover={
                                          index === 0
                                            ? {}
                                            : {
                                                scale: 1.2,
                                                color: "#F7C9D3",
                                                opacity: 1,
                                                transition: {
                                                  duration: 0.2,
                                                  ease: [0.37, 0, 0.63, 1],
                                                },
                                              }
                                        }
                                        transition={{
                                          duration: 2,
                                          delay: index * 0.2,
                                          ease: [0.68, -0.6, 0.32, 1.6],
                                        }}
                                        className="inline-block  "
                                      >
                                        {char}
                                      </motion.span>
                                  
                                  );
                                })}</h1>
           
          </div>
          <motion.div 
            className="para w-[50%] text-[1.2vw] -mt-[3.5%]  ml-[6%] leading-5 font-serif ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eos quasi recusandae non natus et corrupti quis nemo ab inventore eius, a optio soluta minima sint libero dignissimos. Sunt voluptatibus repudiandae rerum earum deleniti nemo, ullam nam est at numquam?</motion.div>
         
        </div>
      )
}

export default HomeService