import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaCrown } from "react-icons/fa6";
import pricingPackages from "../data/pricingPackages.json";
import { fadeIn } from "../utils/varients";

const fiverrLink = "https://www.fiverr.com/s/GzQ3lV7";
const priceThemes = {
  1: {
    text: "text-[#ff8a65]",
  },
  2: {
    text: "text-[#4dd0e1]",
  },
  3: {
    text: "text-[#ffd54f]",
  },
  4: {
    text: "text-[#81c784]",
  },
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#e20c4b]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <p className="text-[#e20c4b] text-[11px] font-semibold tracking-[0.24em] uppercase mb-4">
            Pricing Plans
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Choose the right plan for your Business
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Clean, business-focused website packages with Fiverr-based ordering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pricingPackages.map((pkg, index) => {
            const theme = priceThemes[pkg.id] || priceThemes[1];

            return (
              <motion.div
                key={pkg.id}
                variants={fadeIn("up", index * 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className={`group relative rounded-[26px] border overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  pkg.highlight
                    ? "bg-[linear-gradient(180deg,rgba(226,12,75,0.16)_0%,rgba(24,24,31,0.98)_22%,rgba(15,15,19,1)_100%)] border-[#e20c4b]/40 shadow-2xl shadow-red-900/20"
                    : "bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(22,22,29,0.98)_22%,rgba(15,15,19,1)_100%)] border-white/5 hover:border-[#e20c4b]/30 hover:shadow-2xl hover:shadow-red-900/10"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                {pkg.highlight && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e20c4b] text-white text-[11px] font-semibold uppercase tracking-wide shadow-lg shadow-red-900/30">
                    <FaCrown className="text-[10px]" />
                    Popular
                  </div>
                )}

                <div className="relative p-6 flex h-full flex-col">
                  <div className="mb-6">
                    <p className="text-[#e20c4b] text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
                      {pkg.tag}
                    </p>

                    <h3 className="text-[20px] font-bold text-white leading-tight mb-4 pr-16">
                      {pkg.name}
                    </h3>

                    <div className="mb-4 rounded-2xl border border-white/8 bg-black/15 px-4 py-4">
                      <div className="flex items-end gap-2">
                        <span
                          className={`text-4xl font-bold leading-none ${theme.text}`}
                        >
                          {pkg.price}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-6 line-clamp-3">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs text-gray-200">
                      {pkg.delivery}
                    </span>
                    <span className="px-3 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs text-gray-200">
                      {pkg.revisions}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6 flex-1">
                    {pkg.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#e20c4b]/10 border border-[#e20c4b]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaCheck className="text-[#e20c4b] text-[10px]" />
                        </div>
                        <p className="text-gray-300 text-sm leading-6">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-white/10">
                    <a
                      href={fiverrLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold transition-all duration-300 ${
                        pkg.highlight
                          ? "bg-[#e20c4b] hover:bg-[#c40a40] text-white shadow-lg shadow-red-900/20"
                          : "bg-white/5 border border-white/10 hover:border-[#e20c4b] hover:bg-[#e20c4b] text-white"
                      }`}
                    >
                      <span>Order on Fiverr</span>
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e20c4b] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
