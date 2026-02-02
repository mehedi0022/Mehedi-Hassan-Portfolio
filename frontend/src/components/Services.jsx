import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";
import { FaArrowRight } from "react-icons/fa6";
// 1. Import specific icons
import {
  FaCode,
  FaPalette,
  FaMobileScreenButton,
  FaServer,
  FaWordpress,
  FaSearchengin,
} from "react-icons/fa6";

// 2. Define your services data here to include the Icon Components
const servicesData = [
  {
    _id: 1,
    title: "Web Development",
    description:
      "Building robust, scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).",
    icon: FaCode, // The component itself
  },
  {
    _id: 2,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces that ensure a seamless user experience.",
    icon: FaPalette,
  },
  {
    _id: 3,
    title: "App Development",
    description:
      "Developing cross-platform mobile applications with modern frameworks and responsive designs.",
    icon: FaMobileScreenButton,
  },
  {
    _id: 4,
    title: "WordPress Dev",
    description:
      "Custom WordPress theme development, plugin integration, and website maintenance services.",
    icon: FaWordpress,
  },
  {
    _id: 5,
    title: "Backend Systems",
    description:
      "Architecting secure and efficient server-side logic, APIs, and database management solutions.",
    icon: FaServer,
  },
  {
    _id: 6,
    title: "SEO Optimization",
    description:
      " improving website visibility and ranking on search engines to drive organic traffic.",
    icon: FaSearchengin,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e20c4b]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
            <p className="text-[#e20c4b] font-medium tracking-widest uppercase text-sm">
              What I Offer
            </p>
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Specialized{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Services
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              key={service._id}
              className="group relative p-8 bg-[#16161d] border border-white/5 rounded-2xl hover:border-[#e20c4b]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Number */}
              <div className="absolute -right-4 -top-4 text-9xl font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 select-none pointer-events-none">
                0{index + 1}
              </div>

              {/* ICON CONTAINER */}
              <div className="relative w-16 h-16 mb-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#e20c4b] group-hover:border-[#e20c4b] transition-all duration-500">
                {/* Render the Icon Component */}
                <service.icon className="text-2xl text-[#e20c4b] group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#e20c4b] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-colors duration-300 cursor-pointer">
                  <span>Learn More</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e20c4b] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
