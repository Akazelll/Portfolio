"use client";

import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import { useProjectContext } from "../context/ProjectContext";
import ProjectPage from "./ProjectPage";

const Portfolio = () => {
  // Menggunakan mobileMenuOpen dan setMobileMenuOpen untuk membuka/tutup menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mengambil data projek dari context
  const { projects } = useProjectContext();

  useEffect(() => {
    // Fungsi untuk memonitor scroll dan mengubah state scrolled
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Menambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup pada unmount
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header & Navbar */}
      <div>
        {/* Menyertakan properti mobileMenuOpen dan setMobileMenuOpen */}
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
