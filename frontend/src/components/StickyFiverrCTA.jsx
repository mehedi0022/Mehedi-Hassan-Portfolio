import { FaBagShopping } from "react-icons/fa6";

const fiverrLink = "https://www.fiverr.com/s/GzQ3lV7";

const StickyFiverrCTA = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="pointer-events-none absolute -inset-[2px] overflow-hidden rounded-full">
        <div className="absolute inset-0 rounded-full border border-[#e20c4b]/20" />
        <div className="absolute top-0 left-[-35%] h-full w-[35%] rounded-full bg-gradient-to-r from-transparent via-[#e20c4b] to-transparent opacity-80 blur-[1px] animate-[cta-sweep_2.8s_linear_infinite]" />
      </div>
      <a
        href={fiverrLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-3 rounded-full border border-[#e20c4b]/25 bg-[#16161d]/95 backdrop-blur-md px-5 py-3 text-white shadow-2xl shadow-red-900/20 hover:bg-[#1d1d26] transition-all duration-300 hover:-translate-y-1"
      >
        <span className="w-10 h-10 rounded-full bg-[#e20c4b] flex items-center justify-center text-white">
          <FaBagShopping className="text-sm" />
        </span>
        <span className="hidden sm:block">
          <span className="block text-[11px] uppercase tracking-[0.2em] text-gray-400">
            Order Now
          </span>
          <span className="block text-sm font-semibold text-white">
            Hire on Fiverr
          </span>
        </span>
      </a>
    </div>
  );
};

export default StickyFiverrCTA;
