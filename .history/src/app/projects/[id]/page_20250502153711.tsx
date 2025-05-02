"use client";
import { useEffect, useState } from "react";
import { useProjectContext } from "../../../context/ProjectContext";
import NavbarProject from "./NavbarProject";
import Footer from "@/app/Footer";
import MainBG from "./MainBG";
import ProjectDetails from "../../ProjectDetails";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const ProjectDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const [project, setProject] = useState<any>(null);
  const { getProjectById } = useProjectContext();
  const [projectId, setProjectId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchParams = async () => {
      const { id } = await params;
      setProjectId(id);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (projectId) {
      const projectData = getProjectById(parseInt(projectId, 10));
      setProject(projectData);
    }
  }, [projectId, getProjectById]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen  ">
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