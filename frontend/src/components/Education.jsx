import { MdCastForEducation, MdWorkHistory } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const educationData = [
  {
    institution: "City University, Dhaka",
    degree: "B.Sc in Computer Science",
    year: "2021 - 2025",
    result: "CGPA: 3.33",
    status: "Graduated",
  },
  {
    institution: "Ideal College, Dhanmondi",
    degree: "Higher Secondary (HSC)",
    year: "2018 - 2020",
    result: "GPA: 4.83",
    status: "Completed",
  },
  {
    institution: "Nayankhan High School",
    degree: "Secondary School (SSC)",
    year: "2016 - 2018",
    result: "GPA: 4.50",
    status: "Completed",
  },
];

const experienceData = [
  {
    company: "Pool Nation",
    role: "Web Developer",
    year: "2021 - Present",
    desc: "Leading frontend development and maintaining legacy WordPress systems.",
    current: true,
  },
  {
    company: "Fiverr & Upwork",
    role: "Full Stack Freelancer",
    year: "2022 - Present",
    desc: "Delivered 60+ custom web solutions for international clients.",
    current: true,
  },
  {
    company: "Freelancer.com",
    role: "Frontend Developer",
    year: "2020 - 2021",
    desc: "Completed 30+ projects focusing on UI/UX and responsiveness.",
    current: false,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      {/* ==================== AMBIENT LIGHTING ==================== */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#e20c4b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ==================== FIXED HEADER SECTION ==================== */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {/* Tagline with Lines */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
            <span className="text-[#e20c4b] font-medium tracking-widest uppercase text-sm">
              My Journey
            </span>
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
          </div>

          {/* Main Title with Gradient */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Experience
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed">
            A timeline of my academic qualifications and professional career
            growth in the tech industry.
          </p>
        </motion.div>

        {/* ==================== TIMELINE CONTENT ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* COLUMN 1: EDUCATION */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e1e24] to-black border border-white/10 flex items-center justify-center shadow-lg">
                <MdCastForEducation className="text-2xl text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Academic</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Qualification
                </p>
              </div>
            </div>

            <div className="relative space-y-8">
              {/* Dashed Line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-[2px] border-l-2 border-dashed border-white/10"></div>

              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("right", 0.1 * index)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                  className="relative pl-16 group"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[14px] top-1 w-5 h-5 rounded-full bg-[#0f0f13] border-2 border-white/20 group-hover:border-blue-500 group-hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-blue-500 transition-colors"></div>
                  </div>

                  {/* Card */}
                  <div className="p-6 rounded-2xl bg-[#16161d]/50 border border-white/5 hover:bg-[#16161d] hover:border-white/10 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.degree}
                      </h4>
                      <span className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 text-gray-400 border border-white/5">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {item.institution}
                    </p>

                    <div className="flex gap-3">
                      <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                        {item.result}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: EXPERIENCE */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e1e24] to-black border border-white/10 flex items-center justify-center shadow-lg">
                <MdWorkHistory className="text-2xl text-[#e20c4b]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Professional</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Career Path
                </p>
              </div>
            </div>

            <div className="relative space-y-8">
              {/* Dashed Line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-[2px] border-l-2 border-dashed border-white/10"></div>

              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("left", 0.1 * index)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                  className="relative pl-16 group"
                >
                  {/* Timeline Node with Pulse for Current Roles */}
                  <div
                    className={`absolute left-[14px] top-1 w-5 h-5 rounded-full bg-[#0f0f13] border-2 z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-125
                    ${
                      item.current
                        ? "border-[#e20c4b] shadow-[0_0_10px_rgba(226,12,75,0.4)]"
                        : "border-white/20 group-hover:border-[#e20c4b]"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        item.current
                          ? "bg-[#e20c4b]"
                          : "bg-white/50 group-hover:bg-[#e20c4b]"
                      }`}
                    ></div>
                  </div>

                  {/* Card */}
                  <div className="p-6 rounded-2xl bg-[#16161d]/50 border border-white/5 hover:bg-[#16161d] hover:border-white/10 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(226,12,75,0.1)]">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-[#e20c4b] transition-colors">
                        {item.role}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded text-[10px] font-mono border ${
                          item.current
                            ? "bg-[#e20c4b]/10 text-[#e20c4b] border-[#e20c4b]/20"
                            : "bg-white/5 text-gray-400 border-white/5"
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{item.company}</p>
                    <p className="text-gray-500 text-sm leading-relaxed text-opacity-80">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
