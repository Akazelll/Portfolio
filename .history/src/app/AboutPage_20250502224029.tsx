"use client";

import React from "react";
import Image from "next/image"; // Import Image from Next.js
Error: Invalid src prop (https://iili.io/3hZfqsj.md.jpg) on `next/image`, hostname "iili.io" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
    at defaultLoader (http://localhost:3000/_next/static/chunks/node_modules_fc04e4e4._.js:9832:49)
    at http://localhost:3000/_next/static/chunks/node_modules_fc04e4e4._.js:7260:36
    at Array.map (<anonymous>)
    at generateImgAttrs (http://localhost:3000/_next/static/chunks/node_modules_fc04e4e4._.js:7260:24)
    at getImgProps (http://localhost:3000/_next/static/chunks/node_modules_fc04e4e4._.js:7647:27)
    at http://localhost:3000/_next/static/chunks/node_modules_fc04e4e4._.js:10209:82
    at AboutPage (http://localhost:3000/_next/static/chunks/src_app_4c19171a._.js:555:241)
    at Main (http://localhost:3000/_next/static/chunks/src_app_4c19171a._.js:744:229)
    at Portfolio (http://localhost:3000/_next/static/chunks/src_app_4c19171a._.js:961:229)
    at ClientPageRoot (http://localhost:3000/_next/static/chunks/node_modules_next_dist_1a6ee436._.js:2061:50)

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
