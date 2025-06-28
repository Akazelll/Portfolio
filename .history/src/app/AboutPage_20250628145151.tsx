"use client";

import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section id="about" className="w-full py-20 pt-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          About Me
        </h2>
        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* Foto Profil */}
          <div className="lg:w-1/3 flex justify-center relative group">
            <Image
              src="https://iili.io/3hZfqsj.md.jpg" // URL gambar eksternal
              alt="Foto Profil"
              className="w-48 h-48 object-cover rounded-full shadow-lg transition-transform transform group-hover:scale-105"
              width={192}
              height={192}
            />
            <div className="absolute inset-0 rounded-full bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          {/* Deskripsi Diri */}
          <div className="mt-8 lg:mt-0 lg:w-2/3">
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Saya seorang pengembang web yang bersemangat dalam menciptakan
              situs web modern dan responsif. Saya mengkhususkan diri dalam
              JavaScript, React, dan Tailwind CSS.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Keahlian Saya
              </h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                {[
                  "NextJS",
                  "Laravel",
                  "Tailwind CSS",
                  "Node.js",
                  "MySQL",
                ].map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 hover:text-gray-800 transition"
                  >
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-indigo-600 text-white text-sm font-medium px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
