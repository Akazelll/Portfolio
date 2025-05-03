"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
        Welcome to My Portfolio
      </h1>
      <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl sm:leading-8">
        Hi! I&apos;m a passionate developer skilled in creating modern and
        responsive websites. I specialize in JavaScript, React, and Tailwind
        CSS.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#projects"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition"
        >
          Contact Me <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
