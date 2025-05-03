"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Mendefinisikan tipe untuk proyek
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string; // Gambar bersifat opsional
}

const ProjectPage = ({ projects }: { projects: Project[] }) => {
  // Function untuk memotong deskripsi
  const truncateDescription = (text: string, length: number = 100) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <section id="projects" className="bg-gray-100 w-full py-20 pt-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400} // Ganti dengan ukuran yang sesuai
                    height={250} // Ganti dengan ukuran yang sesuai
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {truncateDescription(project.description, 100)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
