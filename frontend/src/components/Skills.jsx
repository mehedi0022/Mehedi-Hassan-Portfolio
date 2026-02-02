import { useState } from "react";
import { skills } from "../assets/assets"; // Ensure your assets file is correct
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/varients";
import { FaCode, FaServer, FaTools } from "react-icons/fa"; // Icons for tabs

const Skills = () => {
  const [category, setCategory] = useState("Frontend");

  // categories configuration
  const categories = [
    { name: "Frontend", icon: FaCode },
    { name: "Backend", icon: FaServer },
    { name: "Tools", icon: FaTools },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      {/* ==================== BACKGROUND GLOWS ==================== */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#e20c4b]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ==================== HEADER ==================== */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
            <p className="text-[#e20c4b] font-medium tracking-widest uppercase text-sm">
              My Expertise
            </p>
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* ==================== MODERN TAB NAVIGATION ==================== */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setCategory(cat.name)}
              className={`
                flex items-center gap-2 px-3 md:px-6 py-1.5 md:py-3 rounded-full text-sm font-semibold transition-all duration-300 border
                ${
                  category === cat.name
                    ? "bg-[#e20c4b] border-[#e20c4b] text-white shadow-lg shadow-red-900/30 scale-105"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30"
                }
              `}
            >
              <cat.icon
                className={
                  category === cat.name ? "text-white" : "text-[#e20c4b]"
                }
              />
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* ==================== SKILLS GRID ==================== */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={index} // Preferably use skill._id if available
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-[#16161d] border border-white/5 rounded-2xl p-5 hover:border-[#e20c4b]/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/10 hover:-translate-y-1 flex items-center gap-4"
                >
                  {/* Icon Box */}
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#e20c4b]/10 group-hover:border-[#e20c4b]/30 transition-all duration-300">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-8 h-8 object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(226,12,75,0.5)] transition-all duration-300"
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-[#e20c4b] transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      {/* Optional: Add a 'level' to your data, or just keep description */}
                      {skill.description || "Proficient"}
                    </p>
                  </div>

                  {/* Decorative Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
