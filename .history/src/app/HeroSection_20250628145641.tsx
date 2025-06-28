"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="mt-8 text-lg font-medium text-gray-500 sm:text-xl sm:leading-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        Hi! I&apos;m a passionate developer skilled in creating modern and
        responsive websites. I specialize in JavaScript, React, and Tailwind
        CSS.
      </motion.p>
      <motion.div
        className="mt-10 flex items-center justify-center gap-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <motion.a
          href="#projects"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="#contact"
          className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition"
          whileHover={{ x: 5 }}
        >
          Contact Me <span aria-hidden="true">→</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
