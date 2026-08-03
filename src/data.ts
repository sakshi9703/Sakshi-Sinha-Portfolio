import { Project, Experience } from './types';

export const projects: Project[] = [
  {
    featured: true,

    title: "AI Powered Job Tracker",

    subtitle:
      "A production-ready MERN application that streamlines job applications with AI-powered resume analysis, ATS scoring, and interview preparation.",

    problem:
      "Managing job applications across multiple companies becomes disorganized and repetitive. Candidates also struggle to understand how well their resume aligns with a specific job description.",

    solution:
      "Developed a scalable MERN application integrating Google Gemini AI to analyze resumes, generate ATS-style feedback, identify missing skills, and create personalized interview questions while providing an intuitive dashboard for tracking applications.",

    image: "assets/screenshots/job-tracker/full-jt-ss.png",

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Gemini AI",
      "Cloudinary",
      "Tailwind CSS",
    ],

    features: [
      "JWT Authentication",
      "AI Resume Analysis",
      "ATS Score Generation",
      "Interview Question Generator",
      "Cloudinary Resume Storage",
      "Advanced Search & Filtering",
      "Sorting & Pagination",
      "Analytics Dashboard",
      "Responsive Design",
    ],

    metrics: [
      {
        label: "AI",
        value: "Google Gemini",
      },
      {
        label: "Deployment",
        value: "Netlify",
      },
      {
        label: "Storage",
        value: "Cloudinary",
      },
      {
        label: "Backend",
        value: "Node + Express",
      },
    ],

    github: "YOUR_GITHUB_LINK",

    live: "https://track-your-job.netlify.app/",
  },

  {
    title: "Now or Never",

    subtitle:
      "An AI-powered productivity platform designed to improve focus, planning, and daily execution.",

    problem:
      "Students and professionals often struggle to organize tasks effectively while maintaining productivity over time.",

    solution:
      "Created a modern productivity platform using React, TypeScript, Firebase, and Google AI Studio to generate intelligent timelines, monitor progress, and synchronize data with Google Sheets.",

    image: "assets/screenshots/now-or-never/full-now-or-never.png",

    techStack: [
      "React",
      "TypeScript",
      "Firebase",
      "Cloud Firestore",
      "Google AI Studio",
      "Tailwind CSS",
    ],

    features: [
      "Firebase Authentication",
      "AI Timeline Generation",
      "Task Management",
      "Productivity Score",
      "Streak Tracking",
      "Google Sheets Sync",
      "Responsive UI",
    ],

    metrics: [
      {
        label: "Frontend",
        value: "React + TS",
      },
      {
        label: "Database",
        value: "Firestore",
      },
      {
        label: "AI",
        value: "Google AI Studio",
      },
      {
        label: "Deployment",
        value: "Cloud Run",
      },
    ],

    github: "https://github.com/sakshi9703/Now-or-Never-Smart-Task-Planner",

    live:
      "https://now-or-never-655876427910.asia-east1.run.app",
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Industrial Computer Works",

    duration: "March 2026 – May 2026",

    location: "Remote • Lucknow",

    description:
      "Built and deployed a production-ready business website while collaborating directly with the client to translate business requirements into scalable web solutions.",

    highlights: [
      "Developed responsive frontend using React and Tailwind CSS.",
      "Built secure REST APIs using Node.js and Express.js.",
      "Integrated Resend for production email delivery.",
      "Collaborated directly with the client throughout development.",
      "Delivered a production-ready website focused on performance and usability.",
    ],

    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Bootstrap",
      "Resend",
    ],

    website: "https://icw.net.in",

    image: "src/assets/icw/full-ss-icw.png",
  },
];

export const skillCategories = {
  Languages: ["JavaScript", "Python", "Java"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Mongoose", "API Integration"],
  Databases: ["MySQL", "Firebase", "MongoDB"],
  "AI Tools": ["Claude", "Codex", "Gemini AI", "Google AI Studio", "ChatGPT"],
  "Tools & Platforms": ["Postman", "Render", "Vercel", "Netlify", "Docker", "VSCode", "IntelliJ", "NumPy", "Pandas"]
};
