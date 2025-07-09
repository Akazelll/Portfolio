"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoX = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="w-full py-20 pt-28"
      style={{ opacity }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* Foto Profil */}
          <motion.div
            className="lg:w-1/3 flex justify-center"
            style={{ x: photoX }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="https://iili.io/3hZfqsj.md.jpg"
              alt="Foto Profil"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
              width={192}
              height={192}
            />
          </motion.div>

          {/* Deskripsi Diri */}
          <motion.div
            className="mt-8 lg:mt-0 lg:w-2/3"
            style={{ x: textX }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <p className="mt-4 text-lg text-gray-600">
              Saya seorang pengembang web yang bersemangat dalam menciptakan
              situs web modern dan responsif. Saya mengkhususkan diri dalam
              JavaScript, React, dan Tailwind CSS.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Keahlian Saya
              </h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                {["NextJS", "Laravel", "Tailwind CSS", "Node.js", "MySQL"].map(
                  (skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 10 }}
                    >
                      {skill}
                    </motion.li>
                  )
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
