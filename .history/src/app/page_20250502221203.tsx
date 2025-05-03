"use client";

import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import { useProjectContext } from "../context/ProjectContext";
import ProjectPage from "./ProjectPage";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { projects } = useProjectContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header & Navbar */}
      <div>
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </div>

      {/* Main Content */}
      <div>
        <Main />
      </div>

      {/* Projects Section */}
      <section id="projects">
        <ProjectPage projects={projects} />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
