import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Popup from "../utils/Popup";
import { portfolio } from "../assets/assets";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const RecentWork = () => {
  const category = portfolio.map((item) => item.category);
  const uniqueCategories = ["All", ...new Set(category)];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePopup = (_id) => {
    const item = portfolio.find((item) => item._id === _id);
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  return (
    <section
      id="work"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      {/* ==================== BACKGROUND AMBIENCE (Matching Previous Sections) ==================== */}
      {/* Purple Glow (Top Left) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      {/* Red Glow (Bottom Right) */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#e20c4b]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        {/* ==================== HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
            <span className="text-[#e20c4b] font-medium tracking-widest uppercase text-sm">
              My Portfolio
            </span>
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A selection of my latest work, featuring web applications, brand
            designs, and system architectures.
          </p>
        </div>

        {/* ==================== PREMIUM SWIPER FILTER ==================== */}
        <div className="relative w-full max-w-4xl mx-auto mb-12 group">
          {/* Left/Right Fade Gradients for UX */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0f0f13] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0f0f13] to-transparent z-10 pointer-events-none" />

          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            freeMode={true}
            mousewheel={true}
            grabCursor={true}
            modules={[FreeMode, Mousewheel]}
            className="w-full px-4 !pb-4"
          >
            {uniqueCategories.map((item, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <button
                  onClick={() => setActiveCategory(item)}
                  className={`
                    relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 select-none border
                    ${
                      activeCategory === item
                        ? "bg-[#e20c4b] border-[#e20c4b] text-white shadow-[0_0_20px_rgba(226,12,75,0.4)]"
                        : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20"
                    }
                  `}
                >
                  {item}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ==================== PROJECTS GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {portfolio
              .filter(
                (item) =>
                  activeCategory === "All" || item.category === activeCategory,
              )
              .slice(0, 12)
              .reverse()
              .map((item) => (
                <motion.div
                  key={item._id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group bg-[#16161d] border border-white/5 hover:border-[#e20c4b]/30 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-1"
                >
                  {/* Card Image Area */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={() => handlePopup(item._id)}
                        className="px-4 py-2 bg-[#e20c4b] text-white text-xs font-bold rounded-full hover:bg-white hover:text-[#e20c4b] transition-colors"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-grow relative">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="text-[10px] font-bold text-[#e20c4b] uppercase tracking-widest border border-[#e20c4b]/20 px-2 py-1 rounded bg-[#e20c4b]/5">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#e20c4b] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-grow leading-relaxed">
                      {item.summary}
                    </p>

                    <button
                      onClick={() => handlePopup(item._id)}
                      className="w-full mt-auto py-3 rounded-xl bg-white/5 border border-white/5 text-gray-300 text-sm font-medium hover:bg-[#e20c4b] hover:text-white hover:border-[#e20c4b] transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* ==================== POPUP ==================== */}
        {selectedItem && (
          <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Left: Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="rounded-xl w-full h-auto object-cover shadow-2xl border border-white/10"
                />
                <div className="mt-6 flex gap-3">
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#e20c4b] hover:bg-[#c40a40] text-white py-3 rounded-xl font-medium transition-all shadow-lg shadow-red-900/20"
                  >
                    Live Preview
                  </a>
                  {selectedItem.github && (
                    <a
                      href={selectedItem.github}
                      className="flex-1 text-center border border-gray-600 hover:border-white text-white py-3 rounded-xl font-medium transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Right: Details */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="mb-6">
                  <span className="text-[#e20c4b] text-sm font-bold uppercase tracking-widest">
                    {selectedItem.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mt-2 mb-4">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mb-6">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <h4 className="text-gray-500 text-xs uppercase mb-1">
                      Client
                    </h4>
                    <p className="text-white font-medium">
                      {selectedItem.client}
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <h4 className="text-gray-500 text-xs uppercase mb-1">
                      Role
                    </h4>
                    <p className="text-white font-medium">
                      {selectedItem.role}
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <h4 className="text-gray-500 text-xs uppercase mb-1">
                      Date
                    </h4>
                    <p className="text-white font-medium">
                      {selectedItem.date}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-gray-500 text-xs uppercase mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        )}
      </div>
    </section>
  );
};

export default RecentWork;
