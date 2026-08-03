export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  subtitle: string;

  problem: string;
  solution: string;

  features: string[];

  techStack: string[];

  image: string;

  github: string;
  live: string;

  metrics: ProjectMetric[];

  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  stack: string[];
  screenshots?: string[];
}
