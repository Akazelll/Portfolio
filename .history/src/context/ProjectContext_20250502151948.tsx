"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ProjectContextType {
  projects: Project[];
  getProjectById: (id: number) => Project | undefined;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Form Recruitment",
      description:
        "The Form Recruitment Project is a project to participate in the active recruitment of HMTI Udinus in the Science and Technology Sector through an efficient online registration system. Prospective members can fill out a registration form containing personal data such as name, age, gender, semester, email, which is then stored in a MySQL database after being validated. In addition, this system is equipped with CRUD (Create, Read, Update, Delete) features, allowing administrators to easily manage applicant data through the admin panel, including adding, viewing, updating, or deleting data as needed. This project simplifies the management of member registration and increases efficiency in the recruitment process.",
      imageUrl: "https://akazellapp.netlify.app/img/project1.png",
      link: "https://github.com/Akazelll/FormRecruitment",
    },
    {
      id: 2,
      title: "Free Fall Motion Device",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent",
      imageUrl: "https://akazellapp.netlify.app/img/project1.png",
      link: "",
    },
    {
      id: 3,
      title: "Ecotrack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent",
      imageUrl: "https://akazellapp.netlify.app/img/project1.png",
      link: "",
    },
  ]);

  const getProjectById = (id: number) => {
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
