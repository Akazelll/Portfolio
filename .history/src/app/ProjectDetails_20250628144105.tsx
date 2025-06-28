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
      <div className="grid lg:grid-cols-2 max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Gambar di Sebelah Kiri */}
        <div className="relative h-64 lg:h-auto">
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
        <div className="flex flex-col justify-center p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {project.title}
          </h2>
          <p className="text-gray-600 text-base">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white text-sm font-medium px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition"
          >
            View Project
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;