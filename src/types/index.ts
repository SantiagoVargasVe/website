export interface Experience {
  company: string;
  roles: Role[];
  type: string;
  location?: string;
}

export interface Role {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  startYear: number;
  endYear: number;
  description: string;
  courses?: string[];
  link?: { label: string; url: string };
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export type Palette = "blue" | "teal" | "green";
