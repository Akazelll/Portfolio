"use client";

import React from "react";

// Komponen untuk Elemen Dekoratif
const DecorativeElement = ({
  position,
  additionalClass = "",
}: {
  position: "top" | "bottom";
  additionalClass?: string;
}) => (
  <div
    aria-hidden="true"
    className={`absolute inset-x-0 ${
      position === "top" ? "-top-40 sm:-top-80" : "top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]"
    } -z-10 transform-gpu overflow-hidden blur-3xl ${additionalClass}`}
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
      className={`relative ${
        position === "top" ? "left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]" : "left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]"
      } aspect-[1155/678] w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30`}
    />
  </div>
);

const Main = () => {
  return (
    <main className="flex-grow relative px-6 pt-24 lg:px-8 max-w-7xl mx-auto">
      {/* Elemen dekoratif atas */}
      <DecorativeElement position="top" />

      {/* Hero section */}
      {/* <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore my projects and get to know more about my work.
        </p>
        <div className="mt-8 flex justify-center gap-x-4">
          <a
            href="#projects"
            className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200"
          >
            Contact Me
          </a>
        </div>
      </div> */}

      {/* Elemen dekoratif bawah */}
      <DecorativeElement position="bottom" />
    </main>
  );
};

export default Main;
