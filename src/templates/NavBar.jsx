import { motion } from 'framer-motion';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useIsMobile from '../hooks/useIsMobile';

const NavBar = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeIn' }}
      role="navigation"
      aria-label="Main Navigation"
      className="w-full h-[8vh] flex items-center justify-center fixed bottom-[5%] left-0 z-[9999] mt-[1%] px-2 py-2"
    >
      <div
        className={`navbar ${
          isMobile ? 'w-[100%]' : 'w-[80%]'
        } h-full shadow-2xl rounded-full flex items-center justify-between gap-[2%] px-[2%] py-2 font-serif relative backdrop-blur-lg`}
      >
        <button
          onClick={() => navigate(-1)}
          aria-label="Go Back"
          className="logo w-[8%] h-[100%] flex items-center justify-center bg-zinc-200 rounded-full shadow-2xl"
        >
          <i className="ri-arrow-left-line" aria-hidden="true"></i>
        </button>

        <Link to="/" aria-label="Home Page">Home</Link>
        <Link to="/portfolio" aria-label="View Portfolio">Portfolio</Link>
        <Link to="/services" aria-label="View Services">Service</Link>
        <Link to="/partners" aria-label="View Partners">Partners</Link>
        <Link to="/faqs" aria-label="Frequently Asked Questions">FAQs</Link>
      </div>
    </motion.nav>
  );
};

export default NavBar;
