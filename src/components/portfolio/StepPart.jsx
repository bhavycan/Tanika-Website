import { motion } from "framer-motion";
import React, { useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const StepPart = () => {
  const [ishover, sethover] = useState(null);
  const isMobile = useIsMobile();

  const flats = [
    {
      name: "Malabar Exotica",
      location: "Ahmedabad",
      year: 2002,
      image: "https://images.unsplash.com/photo-1572120360610-d971b9b78830",
    },
    {
      name: "Skyline Heights",
      location: "Bangalore",
      year: 2015,
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
    {
      name: "Green Valley",
      location: "Pune",
      year: 2010,
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    },
    {
      name: "Oceanview",
      location: "Mumbai",
      year: 2018,
      image: "https://images.unsplash.com/photo-1565182999561-18d7dc61bb0b",
    },
    {
      name: "Serenity",
      location: "Hyderabad",
      year: 2020,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ];

  return (
    <section className={`main w-full mb-[20vh] flex flex-col`}>
      {flats.map((item, index) => (
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
                isMobile ? "text-[5.5vw]" : "text-[1.8vw]"
              } opacity-80 flex items-center`}
            >
              {item.name}
            </motion.h1>

            <p
              className={`w-full ${
                isMobile ? "h-[15vh] text-[3vw]" : "h-[10vh] text-[1vw]"
              } opacity-75`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspenatur
              optio quaerat nostrum est architecto repudiandae labore assumenda.
              Mollitia, sapiente vel?
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
              className="z-20 card w-[25vw] absolute rounded-md overflow-hidden shadow-2xl h-[35vw] left-[53%] bg-red-800"
            >
              <img src={item.image} alt={`${item.name} building`} className="w-full h-full object-cover" />
            </motion.div>
          )}
        </motion.article>
      ))}
    </section>
  );
};

export default StepPart;
