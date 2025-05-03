"use client"
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
  <div className="bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0"></div>
  <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl z-10">
    Welcome to My Portfolio
  </h1>
  <p className="mt-8 text-lg font-medium text-white sm:text-xl sm:leading-8 z-10">
    Hi! I'm a passionate developer skilled in creating modern and
    responsive websites. I specialize in JavaScript, React, and Tailwind
    CSS.
  </p>
  <div className="mt-10 flex items-center justify-center gap-x-6 z-10">
    <a
      href="#projects"
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      View Projects
    </a>
    <a href="#contact" className="text-sm font-semibold text-white">
      Contact Me <span aria-hidden="true">→</span>
    </a>
  </div>
</section>

  );
};

export default HeroSection;