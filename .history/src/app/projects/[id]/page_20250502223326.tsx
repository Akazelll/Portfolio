"use client";

import { useEffect, useState } from "react";
import { useProjectContext } from "../../../context/ProjectContext";
import NavbarProject from "./NavbarProject";
import Footer from "@/app/Footer";
import MainBG from "./MainBG";
import ProjectDetails from "../../ProjectDetails";

// Define a more specific type for project
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

const ProjectDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const [project, setProject] = useState<Project | null>(null);  // Set the state to the specific type
  const { getProjectById } = useProjectContext();
  const [projectId, setProjectId] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const { id } = await params;
      setProjectId(id);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (projectId) {
      const projectData = getProjectById(parseInt(projectId, 10)); // Ensure the ID is parsed as a number
      setProject(projectData);
    }
  }, [projectId, getProjectById]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading project...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header & Nav */}
      <div>
        <NavbarProject />
      </div>

      {/* Main Content wrapper */}
      <div className="">
        <MainBG />
      </div>

      <section>
        <ProjectDetails project={project} />
      </section>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
