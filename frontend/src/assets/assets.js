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

// Portfolio
import poolnation from "./projects/PoolNation.jpg";
import poolnation_podcast from "./projects/PoolNationPodcast.jpg";
import poolnation_awards from "./projects/PoolNationAwards.jpg";
import VMBaccounting from "./projects/VMBaccounting.ca.jpg";
import CycloneFilterTools from "./projects/CycloneFilterTools.jpg";
import landing_page from "./projects/PoolNationLandingPage.jpg";
import prescripto from "./projects/prescripto.webp";
import khanapina from "./projects/khanapina.png";

// Testimonials

import Edgar from "./projects/Edgar-De-Jesus.jpg";
import VMB from "./projects/VMB.jpg";
import GhulamYaseen from "./projects/GhulamYaseen.jpg";
import farhan from "./projects/farhan.jpg";

export const testimonials = [
  {
    id: "01",
    review:
      "Mehedi is just gold. I love working with him. He is fast, efficient and always answers right away. Hire him you will not be disappointed",
    date: "20 Mar 2024",
    name: "Edgar De Jesus",
    company: "Pool Nation",
    position: "CEO",
    image: Edgar,
  },
  {
    id: "02",
    review:
      "Mehedi is a fantastic developer. He delivered my project on time and with high quality. I highly recommend him for any web development tasks.",
    date: "20 Mar 2021",
    name: "VMB",
    company: "VMB Accounting",
    position: "CEO",
    image: VMB,
  },
  {
    id: "03",
    review:
      "Mehedi is a great developer. He delivered my project on time and with high quality. I highly recommend him for any web development tasks.",
    date: "20 Mar 2022",
    name: "Ghulam Yaseen",
    company: "Freelancer",
    position: "Web Developer",
    image: GhulamYaseen,
  },
  {
    id: "04",
    review:
      "Nice to work with Mehedi. He is very professional and delivers high-quality work on time. Highly recommended!",
    date: "20 Mar 2024",
    name: "Farhan",
    company: "Freelancer",
    position: "Web Developer",
    image: farhan,
  },
];

export const portfolio = [
  {
    _id: 8,
    category: "Company",
    title: "Pool Nation",
    summary: "A comprehensive platform for pool enthusiasts.",
    description:
      "A full-stack web application featuring a podcast, blog, and community forum for pool players.",
    image: poolnation,
    link: "https://poolnation.com",
    client: "Edgar De Jesus",
    date: "2022-03-06",
    technologies: [
      "WordPress",
      "Elementor",
      "PHP",
      "MySQL",
      "JavaScript",
      "CSS",
      "HTML",
    ],
    role: "Full Web Site",
  },
  {
    _id: 2,
    category: "Company",
    title: "Pool Nation Podcast",
    summary: "Modern podcast platform with user subscriptions.",
    description:
      "Full-stack podcast app with user authentication, episode management, and subscription features.",
    image: poolnation_podcast,
    link: "https://poolnationpodcast.com",
    client: "Edgar De Jesus",
    date: "2022-06-15",
    technologies: ["Wordpress", "Elementor", "PHP", "MySQL", "JavaScript"],
    role: "Full Website",
  },
  {
    _id: 3,
    category: "Company",
    title: "Pool Nation Awards",
    summary: "Awards platform for recognizing pool talent.",
    description:
      "Pool Nation Awards blog featuring real-time search, category filtering, and user-friendly design.",
    image: poolnation_awards,
    link: "https://poolnationawards.com",
    client: "Edgar De Jesus",
    date: "2021-04-10",
    technologies: [
      "Wordpress",
      "Elementor",
      "PHP",
      "MySQL",
      "JavaScript",
      "CSS",
      "HTML",
      "Custom Post Types",
    ],
    role: "Full Website",
  },
  {
    _id: 4,
    category: "E-commerce",
    title: "Cyclone Filter Tools",
    summary: "E-commerce platform for pool equipment.",
    description:
      "Developed a full-stack e-commerce site with product listings, shopping cart, and payment integration.",
    image: CycloneFilterTools,
    link: "https://cyclonefiltertools.com",
    client: "ABC Solutions",
    date: "2023-05-18",
    technologies: ["Wordpress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
    role: "Full Website",
  },
  {
    _id: 5,
    category: "Real Estate",
    title: "VMBaccounting",
    summary: "Accounting and real estate management platform.",
    description:
      "A static website for VMBaccounting with a focus on real estate services, featuring a modern design and responsive layout.",
    image: VMBaccounting,
    link: "https://vmbaccounting.ca",
    client: "VMB Accounting",
    date: "2023-09-10",
    technologies: ["Wordpress", "Elementor", "PHP", "MySQL", "JavaScript"],
    role: "Frontend",
  },
  {
    _id: 6,
    category: "Restaurant",
    title: "Simple Restaurant App",
    summary: "Web app for managing restaurant orders and tables.",
    description:
      "Restaurant web app to manage orders, tables, and customer interactions.",
    image: demoImage,
    link: "https://example.com/restaurant",
    client: "NONE",
    date: "2025-01-05",
    technologies: ["React", "Tailwind CSS", "Context API"],
    role: "Frontend Developer",
  },
  {
    _id: 7,
    category: "Healthcare",
    title: "Doctor Appointment System",
    summary: "Tool for managing doctor appointments.",
    description:
      "Web app for scheduling and managing doctor appointments. Includes user authentication and appointment management.",
    image: prescripto,
    link: "https://example.com/tasks",
    client: "None",
    date: "2025-02-15",
    technologies: [
      "React Js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Socket.IO",
      "Cloudinary",
      "Axios",
      "Redux",
      "React Router",
    ],
    role: "Full Stack Developer",
  },
  {
    _id: 1,
    category: "Management System",
    title: "Khanapina Mass Management System",
    summary: "Mass Meal Management System. Calculate meal cost and more. ",
    description:
      "A comprehensive system for managing mass meal distributions, including cost calculations and resource management.",
    image: khanapina,
    link: "https://meal-hub-ten.vercel.app/dashboard",
    client: "Mehedi Hassan",
    date: "2023-09-03",
    technologies: [
      "React Js",
      "Node.js",
      "Cloudinary",
      "MongoDB",
      "JWT",
      "Express Js",
      "Mongoose",
      "Axios",
      "Redux",
      "React Router",
      "Tailwind CSS",
    ],
    role: "Full Stack Developer",
  },
  {
    _id: 9,
    category: "Lending Page",
    title: "Pool Nation Landing Page",
    summary: "Landing page for Pool Nation with modern design.",
    description:
      "A modern landing page for Pool Nation, showcasing their services and features with a responsive design.",
    image: landing_page,
    link: "#",
    client: "Pool Nation",
    date: "2023-08-20",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
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
