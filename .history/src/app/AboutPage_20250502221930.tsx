"use client";

import React from "react";
import Image from "next/image"; // Import Image from Next.js

const AboutPage = () => {
  return (
    <section id="about" className="w-full py-20 pt-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          About Me
        </h2>
        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* Foto Profil */}
          <div className="lg:w-1/3 flex justify-center">
            <Image
              src="https://iili.io/3hZfqsj.md.jpg" // Use the same image URL
              alt="Foto Profil"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
              width={192} // Provide a specific width (in pixels)
              height={192} // Provide a specific height (in pixels)
            />
          </div>

          {/* Deskripsi Diri */}
          <div className="mt-8 lg:mt-0 lg:w-2/3">
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
                <li>JavaScript</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
