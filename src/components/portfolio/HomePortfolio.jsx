import { motion } from "framer-motion";
import React from "react";
import useIsMobile from "../../hooks/useIsMobile";

const HomePortfolio = () => {
  const title = ["work", "that", "speaks!"];
  const isMobile = useIsMobile();

  return (
    <section className="w-full h-[100vh] relative flex items-center justify-center overflow-hidden">
      <div className={`flex ${isMobile ? "flex-col w-[85%] h-[90%]" : "items-center w-[80%] h-[80%]"} justify-center`}>
        
        {/* Left Content */}
        <article className={`${isMobile ? "w-full h-[50%]" : "w-1/2 h-full"}`}>
          <motion.div className="w-full h-[65%] text-black">
            {title.map((item, index) => (
              <div
                key={index}
                className={`w-full ${isMobile ? "h-[32%]" : "h-[9vw]"} flex items-center justify-center relative`}
              >
                <motion.h1
                  initial={{ x: -5, y: 5, opacity: 0 }}
                  whileInView={{ x: 5, y: -5, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className={`w-full uppercase flex items-center ${isMobile ? "text-[22vw]" : "text-[10vw] justify-end"}`}
                >
                  {item}
                </motion.h1>

                <motion.h1
                  initial={{ x: 10, y: -10, opacity: 0 }}
                  whileInView={{ x: -5, y: 5, opacity: 0.1 }}
                  transition={{ duration: 1 }}
                  className={`w-full absolute top-7  left-1 uppercase flex items-center ${isMobile ? "text-[22vw] h-[30%]" : "text-[10vw] h-[30%] justify-end"}`}
                >
                  {item}
                </motion.h1>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0, transformOrigin: isMobile ? "left" : "right", opacity: 0 }}
            whileInView={{ scaleX: isMobile ? 1 : 0.82, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="line w-full h-[1px] bg-black opacity-80"
          />

          <div className={`para w-full h-[30%] flex pt-[3%] justify-end text-right font-semibold ${isMobile ? "leading-4" : ""}`}>
            <motion.p
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ opacity: 0.8, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={`${isMobile ? "text-[3.5vw] w-[90%] h-full" : "text-[1.1vw] w-[90%]"}`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla amet ipsam quia at sequi facere nemo laudantium consequatur, doloribus quidem voluptatum a repudiandae, veritatis, et sit atque tempora perspiciatis? Labore modi asp
            </motion.p>
          </div>
        </article>

        {/* Right Content */}
        <aside className={`${isMobile ? "w-full h-[50%] items-center justify-end" : "w-1/2  h-full "} pt-1 pl-[2%] flex`}>
          <div className={`image ${isMobile ? "w-[90%] h-full" : "w-[75%] h-[86%]"} relative shadow-2xl`}>
            <motion.div
              initial={{ rotate: 180 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 1 }}
              className={`circle ${isMobile ? "w-[30vw] h-[30vw] -top-[10%] right-[75%]" : "w-[40%] h-[30%] -top-[10%] left-[80%]"} flex items-center justify-center rounded-full absolute bg-[#D22935]`}
            >
              <i className={`ri-arrow-down-line ${isMobile ? "text-[10vw]" : "text-[2vw]"} text-white`} />
            </motion.div>
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1516962080544-eac695c93791?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Decorative work image"
            />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HomePortfolio;
