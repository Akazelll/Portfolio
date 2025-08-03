"use client";

import { useProjectContext } from "@/context/ProjectContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import NavbarProject from "./NavbarProject"; // Pastikan path ini benar
import Footer from "@/app/Footer"; // Pastikan path ini benar

const ProjectDetailsPage = () => {
  const { projects } = useProjectContext();
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id as string));

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <NavbarProject />
        <div className="flex flex-grow items-center justify-center">
          <p className="text-lg text-gray-600">Memuat detail proyek...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const {
    title,
    description,
    image,
    technologies = [],
    liveLink = "#",
    repoLink = "#",
  } = project;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 antialiased">
      <NavbarProject />

      <main className="flex-grow">
        <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Header: Judul dan Tautan Kembali */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                {title}
              </h1>
            </div>

            {/* Konten Utama: Gambar dan Detail dalam Grid */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Kolom Kiri: Gambar Proyek */}
              <div className="lg:col-span-2">
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  {image ? (
                    <Image
                      src={image}
                      alt={`Tangkapan layar dari proyek ${title}`}
                      width={1600}
                      height={900}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center bg-gray-100">
                      <span className="text-gray-500">Gambar Tidak Tersedia</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Kolom Kanan (Sidebar): Info Penting */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Tautan Aksi */}
                  <div>
                    <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500">
                      Tautan
                    </h3>
                    <div className="flex flex-col space-y-3">
                      <Link
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-2.5 rounded-md bg-indigo-600 px-4 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <FaExternalLinkAlt className="h-4 w-4" />
                        <span>Lihat Proyek</span>
                      </Link>
                      <Link
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-2.5 rounded-md border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <FaGithub className="h-4 w-4" />
                        <span>Lihat Kode</span>
                      </Link>
                    </div>
                  </div>

                  {/* Teknologi */}
                  <div>
                    <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500">
                      Teknologi
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deskripsi Proyek di Bawah */}
            <div className="mt-16 border-t border-gray-200 pt-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Deskripsi Detail Proyek
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>{description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;