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

  // Loading state yang bersih
  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <NavbarProject />
        <div className="flex flex-grow items-center justify-center">
          <p className="text-xl text-gray-500">Memuat proyek...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Ambil data dengan nilai default yang aman
  const {
    title,
    description,
    image,
    technologies = [],
    liveLink = "#",
    repoLink = "#",
  } = project;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans">
      <NavbarProject />

      <main className="flex-grow">
        <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Bagian Header: Judul dan Deskripsi Singkat */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
                {title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Sebuah tinjauan mendalam mengenai proyek dan proses pembuatannya.
              </p>
            </div>

            {/* Gambar Proyek dengan Efek */}
            <motion.div 
              className="mb-16 overflow-hidden rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
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
                <div className="flex aspect-video w-full items-center justify-center bg-gray-200">
                  <span className="text-gray-500">Gambar Tidak Tersedia</span>
                </div>
              )}
            </motion.div>

            {/* Konten Detail: Deskripsi dan Sidebar */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Kolom Utama: Deskripsi Detail */}
              <div className="lg:col-span-2">
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                  Tentang Proyek
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{description}</p>
                  {/* Anda bisa menambahkan lebih banyak detail di sini jika perlu */}
                </div>
              </div>

              {/* Sidebar: Detail Teknis */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                  {/* Teknologi */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Dibangun Dengan
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="transform rounded-full bg-indigo-100 px-3 py-1.5 text-sm font-semibold text-indigo-800 transition-transform hover:scale-110"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tautan Aksi */}
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Tautan
                    </h3>
                    <div className="flex flex-col space-y-4">
                      <Link
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-base font-bold text-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:bg-indigo-700"
                      >
                        <FaExternalLinkAlt />
                        <span>Lihat Proyek Live</span>
                      </Link>
                      <Link
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-5 py-3 text-base font-bold text-gray-800 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-300"
                      >
                        <FaGithub />
                        <span>Lihat Kode</span>
                      </Link>
                    </div>
                  </div>
                </div>
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