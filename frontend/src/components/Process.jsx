import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import processSteps from "../data/processSteps.json";
import { fadeIn } from "../utils/varients";

const Process = () => {
  return (
    <section
      id="process"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#e20c4b]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
        >
          <p className="text-[#e20c4b] text-[11px] font-semibold tracking-[0.24em] uppercase mb-4">
            Work Process
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            A smooth path from
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              idea to launch
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-8 max-w-3xl mx-auto">
            Every website project moves through a clear workflow so planning,
            design, development, and final delivery stay organized and easy to
            follow.
          </p>
        </motion.div>

        <div className="relative rounded-[36px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(22,22,29,1)_100%)] p-6 md:p-8 xl:p-10 shadow-2xl">
          <div className="hidden xl:block absolute left-[12%] right-[12%] top-[76px] h-px bg-gradient-to-r from-transparent via-[#e20c4b]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeIn("up", index * 0.08)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="group relative rounded-[28px] border border-white/8 bg-[#14141b] p-6 hover:border-[#e20c4b]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl border border-[#e20c4b]/20 bg-[#e20c4b]/10 flex items-center justify-center text-[#e20c4b] text-lg font-bold shadow-lg shadow-red-900/10">
                    {item.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <span className="hidden xl:flex w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] items-center justify-center text-gray-400 group-hover:text-[#e20c4b] transition-colors duration-300">
                      <FaArrowRight className="text-sm" />
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                    Step {item.step}
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-7 mb-5 min-h-[112px]">
                  {item.description}
                </p>

                <div className="rounded-2xl border border-white/8 bg-black/15 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                    Key Focus
                  </p>
                  <p className="text-sm text-gray-300 leading-7">
                    {item.highlight}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e20c4b] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
