import { useEffect, useState } from "react";
import Popup from "../utils/Popup";

import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.9 },
};

import { portfolio } from "../assets/assets";

const RecentWork = () => {
  const category = portfolio.map((item) => item.category);
  const uniqueCategories = ["All", ...new Set(category)];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const handelPopup = (_id) => {
    const item = portfolio.find((item) => item._id === _id);
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isPopupOpen]);

  return (
    <div id="work" className="container mx-auto px-5 py-10">
      <div className="text-center">
        <p className="text-bttonColour ">My Portfolio</p>
        <h1 className="text-4xl font-semibold">Recent Work</h1>
      </div>

      <div className="flex justify-center items-center gap-5 mt-10">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={20}
          freeMode={true}
          modules={[FreeMode]}
          className="w-full"
          breakpoints={{
            480: { slidesPerView: 2.5 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4.5 },
            1536: { slidesPerView: 5.5 },
          }}
        >
          {uniqueCategories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <h2
                  onClick={() => setActiveCategory(item)}
                  className={`select-none ${
                    activeCategory === item
                      ? "bg-boxColour border border-bttonColour text-white"
                      : "bg-boxColour cursor-pointer hover:bg-boxColour/60 border-0 hover:border-bttonColour text-white"
                  } px-3 py-2 text-xs md:text-sm md:px-5 md:py-3 mb-1 rounded-md`}
                >
                  {item}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-10">
        <AnimatePresence mode="wait">
          {portfolio
            .filter(
              (item) =>
                item.category === activeCategory || activeCategory === "All"
            )
            .slice(0, 8)
            .map((item, index) => (
              <motion.div
                key={item._id}
                layout
                variants={cardVariants}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.8, 0.25, 1],
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-boxColour px-3 py-2 md:px-5 md:py-3 rounded-md flex flex-col h-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-4 rounded-md h-[200px] w-full object-cover"
                />
                <h2 className="text-sm md:text-[1rem] font-[500] mt-3">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-xs md:text-[.875rem] mb-2.5 truncate">
                  {item.summary}
                </p>

                <button
                  onClick={() => handelPopup(item._id)}
                  className="text-xs md:text-sm text-white bg-[#e20c4b] hover:bg-[#e20c4b]/60 transition-all duration-300 px-4 py-1 mt-auto mt-2.5 mb-2.5 rounded cursor-pointer"
                >
                  Details
                </button>
              </motion.div>
            ))}
        </AnimatePresence>

        {selectedItem && (
          <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
            <div className="flex flex-col gap-4 md:flex-row md:gap-5 items-start justify-between">
              {/* Image section */}
              <div className="w-full md:w-[500px] mt-1.5">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="rounded-xl w-full object-cover"
                />
              </div>

              {/* Content section */}
              <div className="flex flex-col justify-between mt-1.5 w-full">
                <div>
                  <p className="text-sm mb-1">{selectedItem.category}</p>
                  <h2 className="text-xl font-bold mb-4 text-white">
                    {selectedItem.title}
                  </h2>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">
                    {selectedItem.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    <strong>Client:</strong> {selectedItem.client}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    <strong>Date:</strong> {selectedItem.date}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    <strong>Role:</strong> {selectedItem.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    <strong>Technologies:</strong>{" "}
                    {selectedItem.technologies.join(", ")}
                  </p>
                </div>

                <div className="mt-3.5">
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-[#e20c4b] hover:bg-[#e20c4b]/60 transition-all duration-300 px-4 py-1 rounded cursor-pointer"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </div>
          </Popup>
        )}
      </div>
    </div>
  );
};

export default RecentWork;
