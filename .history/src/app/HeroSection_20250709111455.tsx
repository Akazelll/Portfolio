"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const paraX = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const btnY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center overflow-hidden"
    >
      <motion.h1
        className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
        style={{ x: titleX, opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        className="mt-8 text-lg font-medium text-gray-500 sm:text-xl sm:leading-8"
        style={{ x: paraX, opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        Hi! I&apos;m a passionate developer skilled in creating modern and
        responsive websites. I specialize in JavaScript, React, and Tailwind
        CSS.
      </motion.p>

      <motion.div
        className="mt-10 flex items-center justify-center gap-x-6"
        style={{ y: btnY, opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <motion.a
          href="#projects"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="#contact"
          className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition"
          whileHover={{ x: 4 }}
        >
          Contact Me <span aria-hidden="true">→</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
