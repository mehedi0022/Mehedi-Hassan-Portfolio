import favIcon from "./Fev.png";
import aboutImage from "./mehedi.png";
import demoImage from "./img/FoodDelevery.webp";

export const testimoials = [
  {
    id: "01",
    review:
      "Mehedi is just gold. I love working with him. He is fast, efficient and always answers right away. Hire him you will not be dissapointed",
    date: "20 Mar 2024",
    name: "Edgar De Jesus",
    company: "Pool Nation",
    position: "CEO",
    image: "https://meetmehedi.dev/assets/img/Edgar-De-Jesus.jpg",
  },
  {
    id: "02",
    review:
      "Mehedi is just gold. I love working with him. He is fast, efficient and always answers right away. Hire him you will not be dissapointed",
    date: "20 Mar 2021",
    name: "Edgar De Jesus",
    company: "Freelancer",
    position: "Web Developer",
    image: "https://meetmehedi.dev/assets/img/Ghulam%20Yaseen.jpg",
  },
  {
    id: "03",
    review:
      "Mehedi is just gold. I love working with him. He is fast, efficient and always answers right away. Hire him you will not be dissapointed",
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
    client: "RentalXpress",
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

export const assets = { favIcon, aboutImage, demoImage };
