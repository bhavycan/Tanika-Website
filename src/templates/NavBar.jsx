import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const NavBar = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const audio = useMemo(() => new Audio('/audio/navclick.mp3'), []);

  const playSound = () => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeIn" }}
      role="navigation"
      aria-label="Main Navigation"
      className={`w-full h-[8vh] flex items-center justify-center fixed ${
        isMobile ? "-bottom-[3%]" : "bottom-[0%]  px-2 py-2"
      }  left-0 z-[9999] mt-[1%]`}
    >
      <div
        className={`navbar ${
          isMobile ? "w-[100%]" : "w-[40%]"
        } h-full shadow-2xl  flex  justify-between gap-[2%] px-[2%] py-2 font-serif relative backdrop-blur-lg rounded-full`}
      >
        <button
          onClick={() => {navigate(-1), playSound()}}
          aria-label="Go Back"
          className={`logo w-[8%] items-center  ${
            isMobile ? "h-[50%]" : "h-[100%] "
          } flex  justify-center bg-zinc-200 rounded-full shadow-2xl`}
        >
          <i className="ri-arrow-left-line" aria-hidden="true"></i>
        </button>

        <Link
          to="/"
          onClick={() => {
            playSound();
          }}
          aria-label="Home Page"
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          onClick={() => {
            playSound();
          }}
          aria-label="View Portfolio"
        >
          Portfolio
        </Link>
        <Link
          to="/services"
          onClick={() => {
            playSound();
          }}
          aria-label="View Services"
        >
          Service
        </Link>
        <Link
          to="/partners"
          onClick={() => {
            playSound();
          }}
          aria-label="View Partners"
        >
          Partners
        </Link>
        <Link
          to="/faqs"
          onClick={() => {
            playSound();
          }}
          aria-label="Frequently Asked Questions"
        >
          FAQs
        </Link>
      </div>
    </motion.nav>
  );
};

export default NavBar;
