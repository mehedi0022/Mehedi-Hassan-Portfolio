import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Added Pagination for better UX
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";
import { testimonials } from "../assets/assets";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const ClientReview = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden">
      {/* ==================== AMBIENT LIGHTING ==================== */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e20c4b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ==================== HEADER ==================== */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
            <span className="text-[#e20c4b] font-medium tracking-widest uppercase text-sm">
              Testimonials
            </span>
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Feedback
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take my word for it. Here is what my clients have to say
            about working with me.
          </p>
        </motion.div>

        {/* ==================== SLIDER ==================== */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Pagination]}
            className="pb-12" // Padding bottom for pagination dots
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-[#16161d] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl mx-2 my-2 group hover:border-[#e20c4b]/30 transition-colors duration-500">
                  {/* Decorative Big Quote Icon (Watermark) */}
                  <div className="absolute top-6 right-8 text-6xl text-white/5 group-hover:text-[#e20c4b]/10 transition-colors duration-500 rotate-12">
                    <FaQuoteRight />
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 text-yellow-500 mb-6 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10">
                    "{item.review}"
                  </p>

                  {/* User Profile Section */}
                  <div className="flex items-center gap-5 border-t border-white/5 pt-6">
                    {/* Image with Ring */}
                    <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-[#e20c4b] to-purple-600">
                      <img
                        className="w-full h-full rounded-full object-cover border-2 border-[#16161d]"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    {/* Info */}
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {item.name}
                      </h4>
                      <p className="text-sm text-[#e20c4b] font-medium uppercase tracking-wide">
                        {item.position}{" "}
                        <span className="text-gray-600 normal-case">
                          @ {item.company}
                        </span>
                      </p>
                    </div>

                    {/* Date (Pushed to right) */}
                    <div className="ml-auto hidden sm:block">
                      <p className="text-xs text-gray-500 font-mono border border-white/10 px-3 py-1 rounded-full">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Styles for Swiper Pagination (Add this to your CSS or use style tag) */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #4b5563;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background-color: #e20c4b !important;
          opacity: 1;
          width: 20px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default ClientReview;
