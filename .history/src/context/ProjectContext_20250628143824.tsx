"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";


export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

// Define the context type
interface ProjectContextType {
  projects: Project[];
  getProjectById: (id: number) => Project | undefined;
}

// Create the context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Provider component
export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Form Recruitment",
      description:
        "The Form Recruitment Project is a project to participate in the active recruitment of HMTI Udinus in the Science and Technology Sector through an efficient online registration system. Prospective members can fill out a registration form containing personal data such as name, age, gender, semester, email, which is then stored in a MySQL database after being validated. In addition, this system is equipped with CRUD (Create, Read, Update, Delete) features, allowing administrators to easily manage applicant data through the admin panel, including adding, viewing, updating, or deleting data as needed. This project simplifies the management of member registration and increases efficiency in the recruitment process.",
      imageUrl: "D:\NextJS\portofolio\public\images?project1.webp",
      link: "https://github.com/Akazelll/FormRecruitment",
    },
    {
      id: 2,
      title: "DigiPustaka",
      description:
      "This project is focused on building a device to measure free fall motion effectively and efficiently for educational purposes.",
      imageUrl: "/images/Screenshot 2025-06-28 141635.png",
      link: "https://github.com/Akazelll/DigitalLibrary",
    },
    {
      id: 3,
      title: "Ecotrack",
      description:
      "Ecotrack is a smart solution for tracking environmental data, focusing on waste management and sustainability.",
      imageUrl: "https://akazellapp.netlify.app/img/project3.png",
      link: "",
    },
  ]);

  const getProjectById = (id: number): Project | undefined => {
    return projects.find((project) => project.id === id);
  };

  return (
    <ProjectContext.Provider value={{ projects, getProjectById }}>
      {children}
    </ProjectContext.Provider>
  );
};


export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};
