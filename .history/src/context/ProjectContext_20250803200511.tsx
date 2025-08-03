"use client";

import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";

// Interface untuk data proyek tetap sama
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  repoLink: string;
}

// Interface untuk context
interface ProjectContextType {
  projects: Project[];
  loading: boolean; // Tambahkan state loading
  getProjectById: (id: number) => Project | undefined;
}

// Buat context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Provider component yang sudah diperbarui
export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State untuk melacak proses fetch

  // Gunakan useEffect untuk mengambil data dari file JSON saat komponen pertama kali dirender
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Ambil data dari /projects.json (file di folder public bisa diakses dari root)
        const response = await fetch('/projects.json');
        const data: Project[] = await response.json();
        setProjects(data); // Simpan data ke state
      } catch (error) {
        console.error("Gagal mengambil data proyek:", error);
      } finally {
        setLoading(false); // Set loading menjadi false setelah selesai (baik berhasil maupun gagal)
      }
    };

    fetchProjects();
  }, []); // Array dependensi kosong berarti useEffect hanya berjalan sekali

  // Fungsi untuk mendapatkan proyek berdasarkan ID
  const getProjectById = (id: number): Project | undefined => {
    return projects.find((project) => project.id === id);
  };

  // Kirim state projects, loading, dan fungsi ke komponen anak
  return (
    <ProjectContext.Provider value={{ projects, loading, getProjectById }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook untuk menggunakan context
export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};