import React, { useRef } from "react";
import BuildCard from "../../templates/BuildCard";
import useIsMobile from "../../hooks/useIsMobile";

const BuildService = () => {
  const isMobile = useIsMobile();
  const constraintsRef = useRef(null);

  const cards = [
    {
      id: 1,
      image: "/images/buildImages/homedesign.webp",
      tag: "Turnkey Design",
      top: "20%",
      left: "25%",
      rotate: 8,
    },
    {
      id: 2,
      image: "/images/buildImages/ModularKitchen.webp",
      tag: "Modular Kitchen",
      top: "30%",
      left: "55%",
      rotate: -10,
    },
    {
      id: 3,
      image: "/images/buildImages/office.webp",
      tag: "Office Interior",
      top: "10%",
      left: "40%",
      rotate: -5,
    },
    {
      id: 4,
      image: "/images/buildImages/residental.webp",
      tag: "Residental Interior",
      top: "15%",
      left: "45%",
      rotate: -5,
    },
    {
      id: 5,
      image: "/images/buildImages/furnishing.webp",
      tag: "Interior Furnishing",
      top: "40%",
      left: "40%",
      rotate: 35,
    },
  ];

  return (
    <section
      aria-label="Build Service Showcase"
      className="w-full h-[100vh] flex items-center justify-center overflow-hidden relative"
    >
      <header
        className={`title ${
          isMobile ? "w-[90%] h-[50%]" : "w-[60%] h-[80%]"
        } flex flex-col items-center justify-center px-[10%]`}
      >
        <h1
          className={`w-full ${
            isMobile ? "h-[30%] text-[30vw]" : "h-[30%] text-[10vw]"
          } flex items-center font-['Seasons']`}
        >
          Brick
        </h1>
        <h2
          className={`w-full ${
            isMobile ? "h-[2%] text-[15vw]" : "h-[2%] text-[5vw]"
          } text-gray-500 font-bold flex items-center justify-center font-['Brittany']`}
        >
          By
        </h2>
        <h1
          className={`w-full ${
            isMobile
              ? "h-[30%] text-[30vw]"
              : "h-[30%] text-[10vw] justify-end"
          } flex items-center font-['Seasons']`}
        >
          Brick
        </h1>
      </header>

      <main
        ref={constraintsRef}
        className={`w-full h-full ${
          isMobile ? "top-0 -left-[15%]" : ""
        } flex items-center justify-center absolute z-10`}
        aria-label="Draggable cards container"
      >
        {cards.map((item) => (
          <BuildCard key={item.id} card={item} constraints={constraintsRef} />
        ))}
      </main>

      {isMobile && (
        <aside
          className="w-full absolute top-[80%] h-[10%]"
          aria-label="Drag instruction"
        >
          <p className="w-full h-full flex items-center justify-center text-[10vw] font-['Seasons']">
            Drag It
          </p>
        </aside>
      )}
    </section>
  );
};

export default BuildService;
