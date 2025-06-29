import gsap, { ScrollTrigger } from "gsap/all";
import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";
import useIsMobile from "../hooks/useIsMobile";

const Contact = () => {
  const mobileName = ["Contact", "Us"];
  const aitag = ["Trust with", "Transparency"];
  const name = ["Contact Us"];

  const parent = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top 0%",
        end: "bottom -150%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    tl.to(parent.current, {
      x: isMobile ? "-51%" : "-50%",
      duration: isMobile ? 0.5 : 1,
      ease: "power.inOut",
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <main
      ref={parent}
      className={`${
        isMobile ? "w-[200%] h-[100vh]" : "w-[200%] h-[100vh]"
      } overflow-hidden text-black mt-20 flex`}
    >
      <section
        className={`imagecontainer px-5 pt-5 pb-8 ${
          isMobile ? "w-[100%] h-full" : "w-[200%] h-full"
        }`}
        aria-hidden={isMobile ? "true" : "false"} // Hide image for screen readers on mobile since replaced
      >
        {!isMobile && (
          <img
            loading="lazy"
            className="w-full h-[100%] -z-10 object-cover"
            src="/images/contact.png"
            alt="Contact related design or background"
          />
        )}
        {isMobile && (
          <div className="w-[50%] h-full top-5 pt-5 pb-8 absolute z-10">
            <div className="w-[90%] h-[65vh] flex items-center justify-center relative">
              <motion.img
                loading="lazy"
                initial={{ scale: 2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-[80%] h-full object-cover absolute"
                src="./images/mobile.png"
                alt="Mobile contact illustration"
              />
            </div>
            <div className="title w-full mt-5">
              {aitag.map((item, index) => (
                <h2
                  key={index}
                  className="uppercase border-l-4 pl-3 border-black overflow-hidden flex items-center justify-start text-[10vw] h-[11vw]"
                >
                  <motion.span
                    initial={{
                      y: 0,
                      rotate: 45,
                      transformOrigin: "left",
                      opacity: 0,
                    }}
                    whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className='inline-block font-["font123"]'
                  >
                    {item}
                  </motion.span>
                </h2>
              ))}
            </div>
            <p className="tag text-[4vw] opacity-80 w-[90%] font-serif leading-5 mt-2 text-left">
              We believe trust is built through complete transparency at every
              step of your project. With our dedicated app, clients can track
              progress, view updates, and stay connected anytime, anywhere.
            </p>
          </div>
        )}
      </section>

      <section
        className={`content h-full text-black mt-5 ${
          isMobile ? "w-[100%] ml-5" : "w-[100%]"
        }`}
        aria-label="Contact Information"
      >
        <header
          className={
            isMobile ? "title w-full leading-10" : "title w-full leading-[6vw]"
          }
        >
          {(isMobile ? mobileName : name).map((item, index) => (
            <h1
              key={index}
              className={`uppercase border-l-4 pl-3 border-black overflow-hidden ${
                isMobile ? "text-[15vw] h-[13.5vw]" : "text-[8vw] h-[6.5vw]"
              }`}
            >
              <motion.span
                initial={{
                  y: 0,
                  rotate: 45,
                  transformOrigin: "left",
                  opacity: 0,
                }}
                whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='inline-block font-["font123"] mt-3'
              >
                {item}
              </motion.span>
            </h1>
          ))}
          <p className="sub-title mt-2 flex items-center text-left justify-start opacity-80">
            Ready to makeover? Call us
          </p>
        </header>

        <motion.address
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="info w-full h-[50%] px-3 py-3 not-italic"
        >
          <div
            className={`part w-full flex items-center ${
              isMobile ? "gap-6 mt-[10%]" : "gap-4 mt-[5%]"
            }`}
          >
            <i
              className={`ri-phone-fill ${
                isMobile ? "text-[6vw]" : "text-[2vw]"
              }`}
              aria-hidden="true"
            ></i>
            <a
              href="tel:+917383838877"
              className="text-xl w-full font-semibold opacity-50"
            >
              +91 7383838877
            </a>
          </div>

          <div
            className={`part w-full flex items-center ${
              isMobile ? "gap-6 mt-[5%]" : "gap-4"
            }`}
          >
            <i
              className={`ri-mail-fill ${
                isMobile ? "text-[6vw]" : "text-[2vw]"
              }`}
              aria-hidden="true"
            ></i>
            <a
              href="mailto:bhavy203@gmail.com"
              className="text-xl font-semibold opacity-50"
            >
              Email Us
            </a>
          </div>

          <div
            className={`part w-full flex items-center ${
              isMobile ? "gap-6 mt-[5%]" : "gap-4"
            }`}
          >
            <i
              className={`ri-map-pin-fill ${
                isMobile ? "text-[6vw]" : "text-[2vw]"
              }`}
              aria-hidden="true"
            ></i>
            <a
            className="text-xl font-semibold opacity-50"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/TANIKA+HOME+DECOR+%26+FURNISHING/@23.114447,72.5401888,16z/data=!4m16!1m9!3m8!1s0x395e83b3fdca6477:0x1a712dca5772d198!2sTANIKA+HOME+DECOR+%26+FURNISHING!8m2!3d23.1142289!4d72.5401798!9m1!1b1!16s%2Fg%2F11q47_h70x!3m5!1s0x395e83b3fdca6477:0x1a712dca5772d198!8m2!3d23.1142289!4d72.5401798!16s%2Fg%2F11q47_h70x?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
              >
              GANESH GLORY, 11, Jagatpur Rd, Gota, Ahmedabad, Gujarat 382470,
              India
            </a>
          </div>

          <div
            className={`part w-full flex items-center gap-4 ${
              isMobile ? "mt-[10%]" : ""
            }`}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100095570019444"
              aria-label="Facebook"
            >
              <i
                className={`ri-facebook-box-fill ${
                  isMobile ? "text-[7vw]" : "text-[2vw]"
                }`}
                aria-hidden="true"
              ></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/tanika_home_decore/"
              aria-label="Instagram"
            >
              <i
                className={`ri-instagram-fill ${
                  isMobile ? "text-[7vw]" : "text-[2vw]"
                }`}
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </motion.address>

        <motion.button
          onClick={() => {
            setTimeout(() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }, 500);
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileTap={{ scale: 0.5 }}
          className={`w-[100%] flex items-center justify-center flex-col ${
            isMobile ? "h-[25%]" : "h-[25%]"
          } cursor-pointer bg-transparent border-none`}
          aria-label="Scroll to top"
          type="button"
        >
          <div
            className={`circle ${
              isMobile ? "w-[10vw] h-[10vw]" : "w-[4vw] h-[4vw]"
            } bg-black flex items-center justify-center text-white rounded-full`}
          >
            <i
              className={`ri-arrow-up-line ${
                isMobile ? "text-[3vw]" : "text-[2vw]"
              } text-[2vw]`}
              aria-hidden="true"
            ></i>
          </div>
          <span
            className={`inline-block ${
              isMobile ? "text-[3vw] mt-[2%]" : "text-[1vw] mt-[1%]"
            } font-semibold`}
          >
            Scroll To Top
          </span>
        </motion.button>
      </section>
    </main>
  );
};

export default Contact;
