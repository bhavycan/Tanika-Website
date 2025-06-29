import { mirrorEasing } from "motion";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Card from "../templates/Card";
import { image } from "motion/react-client";
import useIsMobile from "../hooks/useIsMobile";

const Review = () => {
const reviews = [
  {
    name: "Rahul Patel",
    image:
      "https://images.unsplash.com/photo-1609770653328-a4d1dd377970?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Tanika Associates exceeded our expectations with their professional approach and creative solutions. They understood our vision perfectly and turned it into reality. The entire process was smooth and well-coordinated.",
  },
  {
    name: "Nirali Joshi",
    image:
      "https://images.unsplash.com/photo-1558377235-76f53857000b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    review:
      "We were highly impressed by the quality of work and attention to detail. The team was responsive to all our inputs and adapted accordingly. The final outcome was elegant, functional, and exactly what we had hoped for.",
  },
  {
    name: "Hetal Shah",
    image:
      "https://images.unsplash.com/photo-1626193082710-a16206f819f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww",
    review:
      "From concept to completion, the experience with Tanika Associates was seamless. Their design ideas were fresh and practical, and the execution was flawless. I’d gladly recommend them to anyone seeking quality interior work.",
  },
  {
    name: "Kavit Patel",
    image:
      "https://images.unsplash.com/photo-1543084951-1650d1468e2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Tanika Associates handled our project with great professionalism and care. They delivered every stage of work on time, with excellent finish and functionality. The transformation they brought to our space was outstanding.",
  },
  {
    name: "Meet Gupta",
    image:
      "https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Working with Tanika Associates was a truly stress-free experience. They maintained clear communication throughout and showed deep understanding of our needs. The final result was beyond what we imagined, both in design and quality.",
  },
];



  const [card, setcard] = useState([]);
  const constraintsRef = useRef(null);
  let intervalRef = useRef(null);
  const selectionRef = useRef(null);
  const isMobile = useIsMobile()
  

  useEffect(() => {
   

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start interval when in view
          intervalRef.current = setInterval(() => {
            setcard((prev) => {
              if (prev.length >= reviews.length) {
                return prev;
              } else {
                return [...prev, reviews[prev.length]];
              }
            });
          }, 1500);
        } else {
          // Clear interval when out of view
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.1 } // 50% of the section should be visible
    );

    if (selectionRef.current) {
      observer.observe(selectionRef.current);
    }

    return () => {
     
      observer.disconnect();
      clearInterval(intervalRef.current);
    };

  }, [reviews.length, isMobile]);

  return (
  <section
      ref={selectionRef}
      className={`w-full h-[100vh] py-3 flex items-center justify-center overflow-hidden`}
      aria-label="Client testimonials"
    >
      <div className={`background w-full h-full text-black`}>
        <header className="title w-full leading-[4vw] px-5">
          <h1
            className={`uppercase border-l-4 border-black font-['Seasons'] overflow-hidden ${
              isMobile ? "text-[15vw] h-[13.5vw] pl-2" : "text-[8vw] ml-2 pl-3 h-[6.5vw]"
            }`}
          >
            <motion.span
              initial={{ y: 0, rotate: 45, transformOrigin: "left", opacity: 0 }}
              whileInView={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`inline-block ${isMobile ? "mt-[7%] h-full" : "mt-[2%]"}`}
            >
              testimony
            </motion.span>
          </h1>
          <p
            className={`sub-title flex items-center text-right opacity-80 ${
              isMobile ? "mt-2" : "ml-2"
            }`}
          >
            Listen to our Clients
          </p>
        </header>

        <main ref={constraintsRef} className={`playarea flex h-[70%] ${isMobile ? "flex-col" : ""}`}>
          <section
            className={`left-reviews p-6 ${isMobile ? "w-full h-[80%] mt-3" : "w-[50%] h-full"}`}
            aria-label="Client reviews"
          >
            <div className="reviews h-full w-full flex items-center justify-center relative">
              {card.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ y: 50, opacity: 0, rotate: 45, scale: 0.5 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    rotate: index * 5,
                    scale: 1,
                    transformOrigin: "center",
                  }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ rotate: 0 }}
                  whileTap={isMobile ? { zIndex: 100, rotate: 0 } : {}}
                  drag
                  dragConstraints={constraintsRef}
                  className={`card w-[70%] h-[90%] rounded-xl bg-zinc-100 shadow-2xl px-3 py-6 absolute`}
                  style={{ zIndex: card.length + index }}
                >
                  <Card value={item} />
                </motion.article>
              ))}
            </div>
          </section>

          <aside
            className={`right-reviews p-6 ${isMobile ? "w-full h-[20%]" : "w-[50%] h-full"}`}
            aria-label="Client feedback description"
          >
            <div
              className={`text w-full ${
                isMobile ? "text-left mt-10" : "text-right mt-[55%] flex items-center justify-end"
              }`}
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1, ease: "linear" }}
                className={`leading-5 ${isMobile ? "w-[100%]" : "w-[70%]"}`}
              >
                Our clients’ feedback reflects the dedication and passion we bring to every project. From design to execution, their satisfaction is our greatest reward. These reviews inspire us to continually deliver excellence and build lasting relationships.
              </motion.p>
            </div>
          </aside>
        </main>
      </div>
    </section>
  );
};

export default Review;
