"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/your-image.jpg')" }} // Pastikan path benar
    >
      {/* Latar Belakang Gradasi */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-800 opacity-75 z-0"></div>

      {/* Konten Utama */}
      <div className="relative z-10 text-white px-4 sm:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Welcome to My Portfolio
        </h1>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
          Hi! I&apos;m a passionate developer skilled in creating modern and
          responsive websites. I specialize in JavaScript, React, and Tailwind
          CSS. Let&apos;s build something amazing together!
        </p>
        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="#projects"
            className="rounded-lg bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition duration-300 ease-in-out"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-base font-medium text-white underline decoration-white decoration-2 hover:decoration-indigo-500 transition duration-300 ease-in-out"
          >
            Contact Me <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
