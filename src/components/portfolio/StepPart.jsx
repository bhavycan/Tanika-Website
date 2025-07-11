import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import { Link } from "react-router-dom";
import { use } from "react";
import { div } from "framer-motion/client";

const StepPart = () => {
  const [ishover, sethover] = useState(null);
  const isMobile = useIsMobile();
  const [isopen, setopen] = useState(false)
 const flats = [
  {
    name: "Avani Prastha",
    location: "Sargasan Gandhinagar",
    year: 2024,
    image: "/images/projectimages/AvaniPrastha.webp",
    description: "Avani Prastha is a luxurious 3BHK turnkey project (1210–1220 sq ft) where we delivered complete interior solutions with elegant and functional design."
  },
  {
    name: "Ganesh Pride",
    location: "Vaishnodevi Circle",
    year: 2024,
    image: "/images/projectimages/GaneshPride.webp",
    description : "Ganesh Pride is a 3BHK turnkey project (786 sq ft) where we executed full interior work with a focus on modern, spacious, and practical design."
  },
  {
    name: "Infinity Luxuria",
    location: "Science City",
    year: 2024,
    image: "/images/projectimages/InfinityLuxuria.webp",
    description : "Infinity Luxuria is a premium 3BHK turnkey project (1465 sq ft) in Science City where we crafted elegant interiors that reflect spacious luxury and high-end finishes."
  },
  {
    name: "Astha Onyx",
    location: "Bhuyangdev",
    year: 2025,
    image: "/images/projectimages/AsthaOnyx.webp",
    description : "Astha Onyx is a 3BHK turnkey project (1154 sq ft) in Bhuyangdev where we delivered refined interior solutions that maximize space, style, and comfort."
  },
  {
    name: "Indraprasth Green",
    location: "Satellite",
    year: 2024,
    image: "/images/projectimages/IndraprasthGreen.webp",
      description : "Indraprasth Green is a 3BHK turnkey project (1130 sq ft) in Satellite where we provided complete interior work focused on modern aesthetics and efficient space utilization."
  },
  {
    name: "Chharodi Village",
    location: "Chharodi Village",
    year: 2024,
    image: "/images/projectimages/chharodi.webp",
    description : "A premium 4BHK bungalow in the heart of Chharodi Village, designed and executed with elegant interiors spanning over 3000 sq ft, blending luxury with spacious comfort."
  },
  {
    name: "Aristo Alayam",
    location: "Gota",
    year: 2025,
    image: "/images/projectimages/AristoAlayam.webp",
    description : "Aristo Alayam is a spacious 3BHK turnkey project (1191 sq ft) in Gota where we delivered high-end interior solutions combining luxury and functionality."
  },
  {
    name: "Atharv Landmark",
    location: "Chenpur",
    year: 2024,
    image: "/images/projectimages/AtharvLandmark.webp",
    description : "Atharv Landmark is a 2BHK turnkey project (1224 sq ft) in Chenpur where we provided stylish and efficient interior design solutions tailored for comfortable living."
  },
  {
    name: "Malabar Exotica",
    location: "Tragad",
    year: 2025,
    image: "/images/projectimages/MalabarExotica.webp",
    description : "Malabar Exotica is a 3.5BHK turnkey project (1180 sq ft) in Tragad where we crafted functional and elegant interiors to maximize space and comfort."
  },
  {
    name: "Aristo Anandam",
    location: "Tragad",
    year: 2024,
    image: "/images/projectimages/AristoAnandam.webp",
    description : "Aristo Anandam is a 3BHK turnkey project (956 sq ft) in Tragad where we delivered smart and stylish interior solutions focused on optimizing space and enhancing comfort."
  },
  {
    name: "Parmeshwar Nilayam",
    location: "Tragad",
    year: 2024,
    image: "/images/projectimages/ParmeshwarNilayam.webp",
    description : "Parmeshwar Nilayam is a 3BHK turnkey project (1899 sq ft) in Tragad where we designed and executed elegant interiors that combine spaciousness with modern living comforts."
  },
  {
    name: "Avikam Giriraj",
    location: "Zundal",
    year: 2025,
    image: "/images/projectimages/AvikamGiriraj.webp",
    description : "Avikam Giriraj is a 3BHK turnkey project (848.97 sq ft) in Zundal where we delivered compact yet thoughtfully designed interiors that balance functionality with style."
  },
  {
    name: "Atulyam",
    location: "Raysan Gandhinagar",
    year: 2025,
    image: "/images/projectimages/Atulyam.webp",
    description : "Atulyam is a 3BHK turnkey project (2295 sq ft) in Raysan, Gandhinagar where we executed luxurious and spacious interiors tailored for elegant and modern living."
  },
  {
    name: "Mahadev parisar",
    location: "Vijapur",
    year: 2025,
    image: "/images/projectimages/Mahadevparisar.webp",
    description : "Mahadev Parisar is a 2900 sq ft bungalow in Vijapur where we designed and executed premium interiors that reflect elegance, comfort, and spacious living."
  }
];

  useEffect(()=>{
    if(isopen){
      window.addEventListener("scroll", (e)=>{
          setopen(!isopen)
      })
    }

  },[isopen])

  return (
    
    <section className={`main w-full  mb-[20vh] flex flex-col`}>
      {flats.map((item, index) => (
        <Link onClick={()=>{setopen(!isopen)}}>
        <motion.article
          key={index}
          onHoverStart={() => sethover(index)}
          onHoverEnd={() => sethover(null)}
          className={`steps-part w-full ${
            isMobile ? "h-[20vh] px-[2%] py-[1%]" : "h-[8vw] px-12 py-2"
          } mt-5 flex items-center relative`}
        >
          <div className="name w-1/2 h-full">
            <motion.h1
              whileHover={{ scale: 1.1, transformOrigin: "left", opacity: 1 }}
              className={`w-full ${
                isMobile ? "text-[5.5vw] leading-5" : "text-[1.8vw]"
              } opacity-80 flex items-center`}
            >
              {item.name}
            </motion.h1>

            <p
              className={`w-full flex items-center justify-center ${
                isMobile ? "h-[15vh] text-[3vw]" : "h-[10vh] text-[1vw]"
              } opacity-75`}
            >
             {item.description}
            </p>

            <motion.div
              initial={{ scaleX: 0, transformOrigin: "left", opacity: 0 }}
              whileInView={{ scaleX: isMobile ? 1 : 0.82, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`line w-full ${isMobile ? "mt-[5%]" : ""} h-[1px] bg-black opacity-80`}
            />
          </div>

          <div className="location-year w-1/2 h-full flex flex-col items-end justify-center">
            <h2 className={`${isMobile ? "text-[3vw]" : "text-[1vw]"}`}>{item.location}</h2>
            <h3 className={`${isMobile ? "text-[3vw] opacity-75" : "text-[1vw]"}`}>{item.year}</h3>
            <motion.div
              initial={{ rotate: 180 }}
              whileInView={{ rotate: -90 }}
              transition={{ duration: 1 }}
              className={`circle ${
                isMobile ? "w-[20%] h-[20%] mt-[2%]" : "w-[4vw] h-[6vw] mt-[2%]"
              } flex items-center justify-center rounded-full bg-[#D22935]`}
            >
              <i
                className={`ri-arrow-down-line ${
                  isMobile ? "text-[4vw]" : "text-[2vw]"
                } text-white`}
              />
            </motion.div>
          </div>

          {ishover === index && (
            <motion.div
              initial={{ opacity: 0, pointerEvents: "none" }}
              animate={{
                opacity: 1,
                pointerEvents: "auto",
                
              }}
              transition={{duration : .5, delay : .1}}
              className="z-20 card w-[25vw] absolute rounded-md overflow-hidden shadow-2xl h-[35vw] left-[53%] "
            >
              <img loading="lazy" src={item.image} alt={`${item.name} building`} className="w-full h-full object-cover" />
            </motion.div>
          )}
        </motion.article>
        </Link>
      ))}
      {isopen && (
        <div className="w-[100%] h-[100%] top-0 left-0 bg-gradient-to-bl pointer-events-none from-neutral-500 to-transparent  fixed flex items-center justify-center z-30">
          <div className={` ${isMobile ? "w-[80%] h-[10%]" : "w-[50%] h-[10%]"} backdrop-blur-lg z-50  rounded-md flex items-center justify-center `}>
            <h3 className={`text-[2vw] ${isMobile ? "text-[5vw] text-center " : "text-[2vw]"} font-serif `}>Images are expected to be made available shortly.</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default StepPart;
