import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NavBar = () => {
const navigate = useNavigate()
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
    <motion.div 
    initial={{ opacity : 0}}
    whileInView={{ opacity : 1}}
    viewport={{once: true}}
    transition={{duration: 1, ease: "easeIn"}}
    className='w-full h-[8vh] flex items-center justify-center fixed bottom-[5%] left-0 z-[9999] mt-[1%] px-2 py-2'>

        <div className={`navbar ${isMobile ? "w-[100%]  h-full" : "w-[80%]  h-full"}  shadow-2xl  rounded-full flex items-center justify-between gap-[2%] px-[2%] py-2 font-serif relative  backdrop-blur-lg `}>
            
            <div onClick={() => navigate(-1)} className="logo  w-[8%] h-[100%] flex items-center justify-center bg-zinc-200 rounded-full shadow-2xl   ">

                <i class="ri-arrow-left-line"></i>
            </div>
            <Link to='/' >Home</Link>
            <Link to='/portfolio' >Portfolio</Link>
            <Link to='/services' >Service</Link>
            <Link to='/partners' >Partners</Link>
            <Link to='/faqs' >FAQs</Link>
        </div>
    </motion.div>
  )
}

export default NavBar