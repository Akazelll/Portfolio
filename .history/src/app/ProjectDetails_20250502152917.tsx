import React from "react";

const ProjectDetails = ({ project }: { project: any }) => {
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 -mt-4 p-4">
      <div className="flex flex-col lg:flex-row max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Gambar di Sebelah Kiri */}
        <div className="lg:w-1/2 w-full h-64 lg:h-auto">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* Konten di Sebelah Kanan */}
        <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8 lg:w-1/2 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {project.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {project.description}
          </p>
          <div className="mt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white text-sm font-medium px-4 sm:px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition"
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
