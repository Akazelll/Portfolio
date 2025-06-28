import React from "react";
import Image from "next/image";

// Mendefinisikan tipe untuk `project`
interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
}

const ProjectDetails = ({ project }: { project: Project }) => {
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="grid lg:grid-cols-2 max-w-5xl bg-white shadow-md rounded-2xl overflow-hidden w-full">
        {/* Gambar di Sebelah Kiri */}
        <div className="relative h-64 lg:h-auto">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="responsive"
              width={700}
              height={500}
              objectFit="cover"
              className="rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">No Image Available</span>
            </div>
          )}
        </div>

        {/* Konten di Sebelah Kanan */}
        <div className="flex flex-col justify-center p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {project.title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-lg shadow-sm hover:bg-indigo-600 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            View Project
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
