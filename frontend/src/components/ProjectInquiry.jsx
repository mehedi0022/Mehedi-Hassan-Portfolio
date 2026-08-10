import { motion } from "framer-motion";
import { FaArrowRight, FaRegMessage } from "react-icons/fa6";
import inquiryOptions from "../data/inquiryOptions.json";
import { fadeIn } from "../utils/varients";

const ProjectInquiry = () => {
  return (
    <section
      id="inquiry"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,rgba(22,22,29,0.96)_55%,rgba(15,15,19,1)_100%)] p-8 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-[#e20c4b] mb-6">
                <FaRegMessage className="text-xl" />
              </div>
              <p className="text-[#e20c4b] text-[11px] font-semibold tracking-[0.24em] uppercase mb-4">
                Project Inquiry
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
                Ready to start your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  website project?
                </span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Choose the way that feels easiest for you. Send your details
                directly or place an order through Fiverr.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {inquiryOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  variants={fadeIn("up", 0.2 + index * 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                  className="rounded-[26px] border border-white/8 bg-black/15 p-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-6 mb-6">
                    {option.description}
                  </p>
                  <a
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={option.external ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                      option.external
                        ? "bg-[#e20c4b] hover:bg-[#c40a40] text-white"
                        : "bg-white/5 border border-white/10 hover:border-[#e20c4b] hover:text-white text-gray-200"
                    }`}
                  >
                    <span>{option.ctaLabel}</span>
                    <FaArrowRight className="text-sm" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectInquiry;
