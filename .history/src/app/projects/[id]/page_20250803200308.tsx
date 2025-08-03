"use client";

import { useProjectContext } from "@/context/ProjectContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import NavbarProject from "./NavbarProject"; // Pastikan path ini benar
import Footer from "@/app/Footer"; // Pastikan path ini benar

const ProjectDetailsPage = () => {
  const { projects } = useProjectContext();
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id as string));

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white">
        <NavbarProject />
        <p className="text-2xl font-semibold text-gray-700">Loading project...</p>
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
    <div className="flex min-h-screen flex-col bg-white">
      <NavbarProject />

      <main className="flex-grow px-4 py-8 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Judul Halaman */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Project Details
            </h1>
          </div>

          {/* Konten Utama */}
          <div className="overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Kolom Gambar */}
              <div className="relative min-h-[300px] md:min-h-[400px]">
                {image ? (
                  <Image
                    src={image}
                    alt={title || "Project Image"}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gray-100">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
              </div>

              {/* Kolom Teks */}
              <div className="flex flex-col p-6 sm:p-8">
                <h2 className="mb-2 text-3xl font-bold text-gray-900">{title}</h2>
                <p className="mb-6 text-base leading-relaxed text-gray-600">
                  {description}
                </p>

                {/* Bagian Teknologi */}
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    Teknologi
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bagian Tautan */}
                <div className="mt-auto flex flex-col space-y-3 pt-4 sm:flex-row sm:space-x-3 sm:space-y-0">
                  <Link
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
                  >
                    <FaExternalLinkAlt />
                    <span>View Project</span>
                  </Link>
                  <Link
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2.5 font-semibold text-gray-800 transition hover:bg-gray-300"
                  >
                    <FaGithub />
                    <span>Repositori</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;