import { useState } from "react";
import { motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa6";
import faqItems from "../data/faqItems.json";
import { fadeIn } from "../utils/varients";

const FAQ = () => {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#e20c4b]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <p className="text-[#e20c4b] text-[11px] font-semibold tracking-[0.24em] uppercase mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Questions clients ask
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              before we start
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-8">
            Clear answers about delivery, revisions, support, and how the
            website process works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 auto-rows-max">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                variants={fadeIn("up", index * 0.08)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className={`rounded-[26px] border transition-all duration-300 h-fit ${
                  isOpen
                    ? "border-[#e20c4b]/30 bg-[linear-gradient(180deg,rgba(226,12,75,0.08)_0%,rgba(22,22,29,1)_100%)] shadow-xl shadow-red-900/10"
                    : "border-white/8 bg-[#16161d] hover:border-white/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-start justify-between gap-4 text-left p-6"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-3">
                      Question 0{item.id}
                    </p>
                    <span className="text-lg md:text-xl font-semibold text-white leading-8">
                      {item.question}
                    </span>
                  </div>
                  <span className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-[#e20c4b] flex-shrink-0 mt-1">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px w-full bg-white/8 mb-5" />
                      <p className="text-gray-400 text-sm md:text-base leading-7">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
