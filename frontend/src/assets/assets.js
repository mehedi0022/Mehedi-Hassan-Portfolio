import favIcon from "./Fev.png";
import aboutImage from "./mehedi.png";
import demoImage from "./img/FoodDelivery.webp";

// import images for Services
import web_development from "./img/development.png";
import ui_design from "./img/ui-design.png";
import app_development from "./img/app-development.png";

// import images for skills
// Frontend Skills
import html from "./img/skills/frontend/html5.svg";
import css from "./img/skills/frontend/css3.svg";
import javascript from "./img/skills/frontend/javascript.svg";
import typescript from "./img/skills/frontend/typescript.svg";
import react_js from "./img/skills/frontend/react.svg";
import next_js from "./img/skills/frontend/nextjs.svg";
import tailwind_css from "./img/skills/frontend/tailwindcss.svg";
import bootstrap from "./img/skills/frontend/bootstrap.svg";
import material_ui from "./img/skills/frontend/material-ui.svg";

// Backend Skills
import node_js from "./img/skills/backend/nodejs.svg";
import express_js from "./img/skills/backend/expressjs.svg";
import mongoDB from "./img/skills/backend/mongodb.svg";
import MySQL from "./img/skills/backend/mysql.svg";
import firebase from "./img/skills/backend/firebase.svg";
import socket from "./img/skills/backend/Socket.svg";
import cloudinary from "./img/skills/backend/cloudinary.svg";

// Tools and Technologies
import mailchimp from "./img/skills/tools/mailchimp.svg";
import figma from "./img/skills/tools/figma.svg";
import git from "./img/skills/tools/git.svg";
import github from "./img/skills/tools/github.svg";
import postman from "./img/skills/tools/postman.svg";
import vscode from "./img/skills/tools/vscode.svg";
import aws from "./img/skills/tools/aws.svg";
import canva from "./img/skills/tools/canva.svg";

export const testimonials = [
  {
    id: "01",
    review:
      "Mehedi is just gold. I love working with him. He is fast, efficient and always answers right away. Hire him you will not be disappointed",
    date: "20 Mar 2024",
    name: "Edgar De Jesus",
    company: "Pool Nation",
    position: "CEO",
    image: "https://meetmehedi.dev/assets/img/Edgar-De-Jesus.jpg",
  },
  {
    id: "02",
    review:
      "Mehedi is just gold. I love working with him. He is fast, efficient and always answers right away. Hire him you will not be disappointed",
    date: "20 Mar 2021",
    name: "Edgar De Jesus",
    company: "Freelancer",
    position: "Web Developer",
    image: "https://meetmehedi.dev/assets/img/Ghulam%20Yaseen.jpg",
  },
  {
    id: "03",
    review:
      "Mehedi is just gold. I love working with him. He is fast, efficient and always answers right away. Hire him you will not be disappointed",
    date: "20 Mar 2022",
    name: "Edgar De Jesus",
    company: "Pool nation",
    position: "CEO of Pool Nation",
    image: "https://meetmehedi.dev/assets/img/farhan.jpg",
  },
];

export const portfolio = [
  {
    _id: 1,
    category: "Portfolio",
    title: "Developer Portfolio",
    summary: "Showcase of personal projects and skills.",
    description:
      "My personal portfolio website highlighting featured projects, experience, and contact details.",
    image: demoImage,
    link: "https://example.com/portfolio",
    client: "Self",
    date: "2023-01-01",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Developer",
  },
  {
    _id: 2,
    category: "E-commerce",
    title: "Online Store",
    summary: "Modern e-commerce platform with admin panel.",
    description:
      "Full-stack e-commerce app with product management, cart, payment, and order tracking.",
    image: demoImage,
    link: "https://example.com/ecommerce",
    client: "Retail Client",
    date: "2023-03-15",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    role: "Full Stack Developer",
  },
  {
    _id: 3,
    category: "E-commerce",
    title: "Tech Blog",
    summary: "A blog site for tech tutorials and updates.",
    description:
      "Markdown-powered blog with real-time search and category filtering.",
    image: demoImage,
    link: "https://example.com/blog",
    client: "Self",
    date: "2023-04-10",
    technologies: ["Next.js", "Firebase", "Markdown"],
    role: "Full Stack Developer",
  },
  {
    _id: 4,
    category: "Education",
    title: "Corporate Site",
    summary: "Landing site for a software company.",
    description:
      "A clean company website featuring services, testimonials, and contact forms.",
    image: demoImage,
    link: "https://example.com/corporate",
    client: "ABC Solutions",
    date: "2023-05-18",
    technologies: ["React", "EmailJS", "Tailwind CSS"],
    role: "Frontend Developer",
  },
  {
    _id: 5,
    category: "Education",
    title: "Online Learning Platform",
    summary: "Course-based platform for students.",
    description:
      "Built a platform where users can enroll in courses, watch videos, and track progress.",
    image: demoImage,
    link: "https://example.com/learning",
    client: "EdTech Startup",
    date: "2023-06-10",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    role: "Full Stack Developer",
  },
  {
    _id: 6,
    category: "Healthcare",
    title: "Doctor Management System",
    summary: "Web app for managing appointments and doctors.",
    description:
      "Clinic web app to manage doctors, schedules, and patient appointments.",
    image: demoImage,
    link: "https://example.com/clinic",
    client: "Local Clinic",
    date: "2023-07-05",
    technologies: ["React", "Express", "MongoDB"],
    role: "Full Stack Developer",
  },
  {
    _id: 7,
    category: "Healthcare",
    title: "Team Task Tracker",
    summary: "Tool for managing team tasks and deadlines.",
    description:
      "Kanban-style app for teams to track tasks, assign deadlines, and update statuses.",
    image: demoImage,
    link: "https://example.com/tasks",
    client: "Agency Team",
    date: "2023-08-12",
    technologies: ["React", "Redux", "Firebase"],
    role: "Full Stack Developer",
  },
  {
    _id: 8,
    category: "Booking",
    title: "Social Media Clone",
    summary: "Mini clone of Instagram with feed and likes.",
    description:
      "A photo-sharing platform with authentication, post uploads, and real-time likes.",
    image: demoImage,
    link: "https://example.com/social",
    client: "Personal Project",
    date: "2023-09-03",
    technologies: ["React", "Node.js", "Cloudinary"],
    role: "Full Stack Developer",
  },
  {
    _id: 9,
    category: "Booking",
    title: "Car Rental System",
    summary: "Platform to book rental cars.",
    description:
      "App for booking vehicles, viewing availability, and managing rental orders.",
    image: demoImage,
    link: "https://example.com/rental",
    client: "RentalPress",
    date: "2023-10-01",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    role: "Full Stack Developer",
  },
  {
    _id: 10,
    category: "Booking",
    title: "Weather App",
    summary: "Real-time weather forecast app.",
    description:
      "Provides weather data by location using OpenWeather API, with clean UI.",
    image: demoImage,
    link: "https://example.com/weather",
    client: "Personal Project",
    date: "2023-11-20",
    technologies: ["React", "OpenWeather API"],
    role: "Frontend Developer",
  },
];

export const services = [
  {
    id: "01",
    title: "UI/UX Design",
    description:
      "Creating user-friendly interfaces with a focus on user experience.",
    icon: ui_design,
  },
  {
    id: "02",
    title: "Web Development",
    description:
      "Building responsive and modern websites using the latest technologies and frameworks.",
    icon: web_development,
  },

  {
    id: "03",
    title: "App Development",
    description:
      "Developing mobile applications for both Android and iOS platforms.",
    icon: app_development,
  },
];

export const skills = [
  // Frontend Skills
  {
    id: "01",
    title: "HTML",
    description: "Markup language",
    level: "90%",
    category: "Frontend",
    image: html,
  },
  {
    id: "02",
    title: "CSS",
    description: "Style sheet language",
    level: "85%",
    image: css,
    category: "Frontend",
  },
  {
    id: "03",
    title: "JavaScript",
    description: "Programming language",
    level: "80%",
    category: "Frontend",
    image: javascript,
  },
  {
    id: "04",
    title: "TypeScript",
    description: "Superset of JavaScript",
    level: "75%",
    image: typescript,
    category: "Frontend",
  },
  {
    id: "05",
    title: "React Js",
    description: "JavaScript library",
    level: "75%",
    image: react_js,
    category: "Frontend",
  },
  {
    id: "06",
    title: "Next Js",
    description: "React Framework",
    level: "70%",
    category: "Frontend",
    image: next_js,
  },
  {
    id: "07",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    level: "80%",
    image: tailwind_css,
    category: "Frontend",
  },
  {
    id: "08",
    title: "Bootstrap",
    description: "Popular CSS framework",
    level: "75%",
    image: bootstrap,
    category: "Frontend",
  },
  {
    id: "21",
    title: "Material UI",
    description: "React component library for web development",
    level: "70%",
    image: material_ui,
    category: "Frontend",
  },
  // Backend Skills
  {
    id: "09",
    title: "Node Js",
    description: "JavaScript runtime",
    image: node_js,
    level: "70%",
    category: "Backend",
  },
  {
    id: "10",
    title: "Express Js",
    description: "Web framework for Node.js",
    image: express_js,
    level: "65%",
    category: "Backend",
  },
  {
    id: "11",
    title: "MongoDB",
    description: "NoSQL database",
    image: mongoDB,
    level: "60%",
    category: "Backend",
  },
  {
    id: "12",
    title: "MySQL",
    description: "Relational database management system",
    image: MySQL,
    level: "55%",
    category: "Backend",
  },
  {
    id: "13",
    title: "Firebase",
    description: "Backend-as-a-Service platform",
    image: firebase,
    level: "70%",
    category: "Backend",
  },
  {
    id: "14",
    title: "Socket.IO",
    description: "Real-time communication library",
    image: socket,
    level: "65%",
    category: "Backend",
  },
  {
    id: "15",
    title: "Cloudinary",
    description: "Media management and upload service",
    image: cloudinary,
    level: "60%",
    category: "Backend",
  },
  // Tools and Technologies
  {
    id: "16",
    title: "Git",
    description: "Version control system",
    level: "80%",
    category: "Tools",
    image: git,
  },
  {
    id: "17",
    title: "GitHub",
    level: "75%",
    description: "Version control platform",
    image: github,
    category: "Tools",
  },
  {
    id: "18",
    title: "Mailchimp",
    level: "90%",
    description: "Email marketing service",
    image: mailchimp,
    category: "Tools",
  },
  {
    id: "19",
    title: "Postman",
    description: "API testing tool",
    image: postman,
    level: "70%",
    category: "Tools",
  },
  {
    id: "20",
    title: "Figma",
    level: "75%",
    description: "Design tool for UI/UX",
    image: figma,
    category: "Tools",
  },
  {
    id: "21",
    title: "VS Code",
    description: "Code editor",
    image: vscode,
    level: "90%",
    category: "Tools",
  },
  {
    id: "22",
    title: "AWS",
    description: "Cloud computing platform",
    image: aws,
    level: "50%",
    category: "Tools",
  },
  {
    id: "23",
    title: "Canva",
    description: "Graphic design tool",
    image: canva,
    level: "70%",
    category: "Tools",
  },
];

export const assets = { favIcon, aboutImage, demoImage };
