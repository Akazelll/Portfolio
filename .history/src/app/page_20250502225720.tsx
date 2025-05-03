"use client";

import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import { useProjectContext } from "../context/ProjectContext";
import ProjectPage from "./ProjectPage";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { projects } = useProjectContext();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header>
        <Navbar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Welcome Section */}
        <section id="main" className="py-20 bg-gray-100">
          <Main />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-black">
              My Projects
            </h2>
            <ProjectPage projects={projects} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-black">
              Contact Me
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <Footer />
      </footer>
    </div>
  );
};

export default Portfolio;
