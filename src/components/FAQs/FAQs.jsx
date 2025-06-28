import React, { useEffect, useState } from 'react'
import QuestionCard from '../../templates/QuestionCard'
import { motion } from 'framer-motion';
import NavBar from '../../templates/NavBar';
import useIsMobile from '../../hooks/useIsMobile';

const Qna = () => {

   const isMobile = useIsMobile();
    
const faqs = [
  {
    front: "Can you visit my home for a design consultation?",
    back: "Yes, we offer on-site consultations at your home or site. While we recommend visiting our experience centre for a better feel of designs and materials, virtual consultations are also available by contacting us."
  },
  {
     front: "How can I trust Tanika with my home interior project?",
  back: "At Tanika, we ensure full transparency through regular updates, site visits, and digital tracking of your project stages. Our clients can monitor progress, material choices, and schedules using our dedicated interior workflow system or through regular reports shared by our team."
  },
  {
    front: "How do I choose materials and finishes for my interiors?",
    back: "Our designers help you choose from a wide variety of finishes, textures, and styles based on your taste and budget. We also provide mood boards and visualizations so you can confidently make decisions."
  },
  {
    front: "How is the site measurement process done?",
    back: "Our experts visit your location and use digital tools to take precise measurements. These are then used to create accurate 2D layouts and 3D models for your approval."
  },
  {
    front: "How long will it take to complete my interior project?",
    back: "A typical modular room takes 3–4 weeks, while a full home interior can take 6–10 weeks. Timelines vary depending on design scope and material selection."
  },
  {
    front: "What are the charges for interior design services in Ahmedabad?",
    back: "Pricing depends on your home size and customization level, with most projects starting from ₹3.5L. We offer transparent estimates after the initial consultation."
  },
  {
    front: "What is the starting price for home interior projects?",
    back: "Our entry-level interior packages start from ₹1.5L for partial designs like kitchen or bedroom setups. Custom packages are available to fit various budgets."
  },
  {
    front: "What interior design styles are trending in Ahmedabad right now?",
    back: "Current trends include minimalist modular furniture, earthy color tones, smart storage, and multi-use spaces. At Tanika, we blend modern design with practical Indian sensibilities."
  }
];


  return (
    <div className='w-screen min-[100vh] overflow-hidden mb-[5%]'>
      <NavBar />
        <motion.div className='title w-full flex overflow-hidden flex-col items-center justify-center h-[40vh]  px-2 py-3 mt-[5%]'> 
            <motion.h1 
            initial={{x : 50 , opacity : 0}}
            whileInView={{ x : 0, opacity : 1}}
            transition={{duration : 1 ,ease : "easeInOut"}}
            className={` ${isMobile ? "text-[40vw] h-[50%] border-b-2 w-fit border-black" : "text-[18vw] w-full  h-[70%]"} flex items-center  justify-center  font-["Seasons"]`}>FAQ<motion.span 
            initial={{opacity : 0, scale : 2}}
            whileInView={{opacity : .8, scale :1            }}
             transition={{duration : 1 ,ease : "easeInOut", delay: .2}}
            className={`inline-block font-["Brittany"] ${isMobile ? "text-[25vw]" : "text-[12vw]"}  `}>s</motion.span></motion.h1>
            <motion.div className={`   ${isMobile ? "w-[85%] h-[35%] leading-4 mt-[5%]" : "w-[50%] h-[30%] leading-5"}  flex items-center font-serif "`}><motion.p
            initial={{x : -50 , opacity : 0}}
            whileInView={{ x : 0, opacity : 1}}
            transition={{duration : 1 ,ease : "easeInOut"}}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae explicabo delectus minima veniam quam maiores quis voluptatem! Laboriosam, vero! Lorem ipsum dolor </motion.p></motion.div>
        </motion.div>

        <motion.div 
        initial={{y : 50 , opacity : 0}}
            whileInView={{ y : 0, opacity : 1}}
            transition={{duration : 1 ,ease : "easeInOut"}}
        className={`question-card-container  ${isMobile ? "flex-col gap-5" : "flex-wrap gap-5 flex-shrink-0"} w-[100%]  flex items-center justify-center  relative min-h-[100vh] mb-[2%]`}>
          {faqs.map((item,index)=>{
            return(
              <QuestionCard card={item} />
            )
          })}
            
        </motion.div>
    </div>
  )
}

export default Qna