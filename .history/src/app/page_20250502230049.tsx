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
      {/* Header & Navbar */}
      <div>
        {/* Menyertakan mobileMenuOpen dan setMobileMenuOpen */}
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