"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.section
      id="about"
      className="w-full py-20 pt-28"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          About Me
        </h2>
        <motion.div
          className="lg:flex lg:items-center lg:space-x-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Foto Profil */}
          <motion.div
            className="lg:w-1/3 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="https://iili.io/3hZfqsj.md.jpg" // URL gambar eksternal
              alt="Foto Profil"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
              width={192} // Menentukan lebar gambar
              height={192} // Menentukan tinggi gambar
            />
          </motion.div>

          {/* Deskripsi Diri */}
          <motion.div
            className="mt-8 lg:mt-0 lg:w-2/3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
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
                <motion.li whileHover={{ x: 10 }} transition={{ type: "tween" }}>NextJS</motion.li>
                <motion.li whileHover={{ x: 10 }} transition={{ type: "tween" }}>Laravel</motion.li>
                <motion.li whileHover={{ x: 10 }} transition={{ type: "tween" }}>Tailwind CSS</motion.li>
                <motion.li whileHover={{ x: 10 }} transition={{ type: "tween" }}>Node.js</motion.li>
                <motion.li whileHover={{ x: 10 }} transition={{ type: "tween" }}>MySQL</motion.li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
