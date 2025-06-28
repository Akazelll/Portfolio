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
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col lg:flex-row max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Gambar di Sebelah Kiri */}
        <div className="relative lg:w-1/2 w-full h-48 sm:h-64 md:h-80 lg:h-auto">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="responsive"
              width={700}
              height={500}
              objectFit="contain"
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* Konten di Sebelah Kanan */}
        <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8 lg:w-1/2 w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            {project.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            {project.description}
          </p>
          <div className="mt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white text-sm sm:text-base font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow hover:bg-indigo-700 transition"
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
