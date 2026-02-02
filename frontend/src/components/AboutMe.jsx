import { assets } from "../assets/assets";
import { FaAward, FaRocket, FaCode } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { TbSend2 } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#e20c4b]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* ==================== LEFT: IMAGE & FLOATING CARDS ==================== */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Image Frame */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-[#e20c4b] opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay z-10"></div>
              <img
                src={assets.aboutImage}
                alt="Mehedi Hassan"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* 1. FLOATING CODE CARD (Top Left) */}
            <div className="absolute -top-6 -left-4 md:-left-10 bg-[#16161d]/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl z-20 animate-[bounce_4s_infinite]">
              {/* Window Controls */}
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              {/* Code Snippet */}
              <div className="font-mono text-[10px] md:text-xs leading-relaxed text-gray-300">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-400">developer</span> ={" "}
                  <span className="text-blue-400">{`{`}</span>
                </p>
                <p className="pl-3">
                  name: <span className="text-green-400">'Mehedi'</span>,
                </p>
                <p className="pl-3">
                  skill: <span className="text-green-400">'MERN Stack'</span>,
                </p>
                <p className="pl-3">
                  hardWorker: <span className="text-[#e20c4b]">true</span>
                </p>
                <p>
                  <span className="text-blue-400">{`}`}</span>;
                </p>
              </div>
            </div>

            {/* 2. FLOATING EXPERIENCE BADGE (Bottom Right) */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#16161d]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#e20c4b] to-purple-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg shadow-red-500/30">
                <FaAward />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">2+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Years Exp.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ==================== RIGHT: FULL DESCRIPTION ==================== */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-12 h-[2px] bg-[#e20c4b]"></span>
              <span className="text-[#e20c4b] font-medium uppercase tracking-widest text-sm">
                About Me
              </span>
            </motion.div>

            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Building Scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Web Solutions.
              </span>
            </motion.h2>

            {/* RESTORED FULL DESCRIPTION */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 space-y-4"
            >
              <p>
                A passionate{" "}
                <strong className="text-white">Full Stack Developer</strong>{" "}
                specializing in the{" "}
                <span className="text-[#e20c4b]">MERN stack</span> with solid
                experience in WordPress development and website maintenance.
              </p>
              <p>
                I have worked on various impactful projects, including{" "}
                <span className="text-white">Doctor Management</span> systems,
                Task Managers, Todo apps, Car Rental platforms, and custom
                Portfolios.
              </p>
              <p>
                Currently, I am working at{" "}
                <strong className="text-white">Pool Nation</strong> as a
                WordPress Developer & Website Maintenance personnel. I am also
                an <strong className="text-white">ICPC 2024</strong>{" "}
                participant. My goal is to become a Software Engineer, build a
                community, and contribute to the tech industry.
              </p>
            </motion.div>

            {/* ==================== STATS CARDS ==================== */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
            >
              {/* Card 1: Projects */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-[#e20c4b]/10 hover:border-[#e20c4b]/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/5 rounded-lg text-[#e20c4b] group-hover:text-white group-hover:bg-[#e20c4b] transition-colors">
                    <FaRocket />
                  </div>
                  <span className="text-xs font-medium text-gray-400 uppercase">
                    Total
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">60+</h3>
                <p className="text-xs text-gray-500">Projects Done</p>
              </div>

              {/* Card 2: Status */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-[#e20c4b]/10 hover:border-[#e20c4b]/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/5 rounded-lg text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <FaCheckCircle />
                  </div>
                  <span className="text-xs font-medium text-gray-400 uppercase">
                    Status
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">Online</h3>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
                <p className="text-xs text-gray-500">24/7 Support</p>
              </div>

              {/* Card 3: Stack */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-[#e20c4b]/10 hover:border-[#e20c4b]/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/5 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FaCode />
                  </div>
                  <span className="text-xs font-medium text-gray-400 uppercase">
                    Stack
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">MERN</h3>
                <p className="text-xs text-gray-500">& Next.js</p>
              </div>
            </motion.div>

            {/* BUTTON */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#e20c4b] to-[#b30a3b] text-white font-semibold shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Connect <TbSend2 className="text-xl" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
