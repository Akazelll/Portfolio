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
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-600">
        <p>Loading project details...</p>
      </div>
    );
  }

  const {
    title = "Project Title",
    description = "Project description not available.",
    imageUrl,
    link = "#",
  } = project;

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="flex flex-col lg:flex-row max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Gambar di Sebelah Kiri */}
        <div className="relative lg:w-1/2 w-full h-64 lg:h-auto">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* Konten di Sebelah Kanan */}
        <div className="flex flex-col justify-center p-6 lg:p-8 lg:w-1/2 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">{description}</p>
          <div className="mt-6">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white text-sm font-medium px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
