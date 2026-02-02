import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaGooglePlay,
} from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import mehedi from "../assets/Mehedi.jpg";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";
import cv from "../assets/Resume-Mehedi-Hassan.pdf";

const Hero = () => {
  const socialLinks = [
    { Icon: FaGithub, link: "https://github.com/mehedi0022" },
    { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/meetmehedi-dev/" },
    { Icon: FaInstagram, link: "https://www.instagram.com/meetmehedi.dev/" },
    { Icon: FaFacebookF, link: "https://www.facebook.com/meetmehedi.dev" },
    {
      Icon: FaGooglePlay,
      link: "https://play.google.com/store/apps/dev?id=5362473091268240728",
    },
  ];

  return (
    <div
      id="home"
      className="relative min-h-screen w-full bg-[#0f0f13] overflow-hidden flex items-center justify-center py-20 lg:py-0"
    >
      {/* Background Ambience (Glows) */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#e20c4b]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* ==================== LEFT: TEXT CONTENT ==================== */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* 1. Badge */}
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-gray-300 text-xs font-medium tracking-wide uppercase">
                Available for Projects
              </span>
            </motion.div>

            {/* 2. Name with Gradient */}
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e20c4b] via-purple-500 to-indigo-500 animate-gradient">
                Mehedi Hassan
              </span>
            </motion.h1>

            {/* 3. Subtitle (Typed) */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="h-[60px] md:h-[40px] mb-4 w-full"
            >
              <ReactTyped
                loop
                typeSpeed={50}
                backSpeed={30}
                strings={[
                  "MERN Stack Developer",
                  "Full Stack Engineer",
                  "React & Next.js Expert",
                  "UI/UX Enthusiast",
                ]}
                className="text-xl md:text-2xl font-medium text-gray-400"
              />
            </motion.div>

            {/* 4. Bio Paragraph */}
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-8"
            >
              A passionate Full Stack Developer specializing in the MERN stack.
              I build robust applications like Doctor Management systems, Task
              Managers, and scalable web solutions using modern technologies.
            </motion.p>

            {/* 5. Modern Social Toolbar */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10 p-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            >
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-[#e20c4b] transition-all duration-300 hover:scale-110"
                >
                  <item.Icon className="text-xl" />
                </a>
              ))}
            </motion.div>

            {/* 6. Contact Grid (Phone/Email) */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-5 w-full"
            >
              <a
                href="#contact" // Link to your contact section
                className="flex-1 px-8 py-4 bg-[#e20c4b] hover:bg-[#c40a40] text-white font-semibold rounded-xl transition-all shadow-lg shadow-red-900/20 text-center"
              >
                Hire Me Now
              </a>
              <a
                href={cv}
                className="flex-1 px-8 py-4 bg-[#1e1e24] border border-gray-700 hover:border-white text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <HiDownload /> Download CV
              </a>
            </motion.div>

            {/* Subtle Contact Info Text */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 hover:text-[#e20c4b] transition-colors cursor-pointer">
                <FaPhone /> +880 1621-905416
              </div>
              <div className="flex items-center gap-2 hover:text-[#e20c4b] transition-colors cursor-pointer">
                <FaEnvelope /> mdmehedi@gmail.com
              </div>
            </motion.div>
          </div>

          {/* ==================== RIGHT: IMAGE ==================== */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
            >
              {/* Abstract decorative shapes behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e20c4b] to-purple-600 rounded-[2rem] rotate-6 opacity-50 blur-lg animate-pulse"></div>

              <img
                src={mehedi}
                alt="Mehedi Hassan"
                className="w-full h-full object-cover rounded-[2rem] border-2 border-white/10 shadow-2xl relative z-10 rotate-0 hover:rotate-1 transition-transform duration-500"
              />

              {/* Floating Code Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-[#16161d] p-4 rounded-xl border border-gray-700 shadow-xl z-20 hidden md:block"
              >
                <div className="flex gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-gray-400 text-xs font-mono">
                  &lt;Coder /&gt;
                  <br />
                  <span className="text-green-400">Building dreams...</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
