import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

import { Autoplay } from "swiper/modules";
import { testimonials } from "../assets/assets";

const ClientReview = () => {
  return (
    <div className="max-w-3xl mx-auto px-5 justify-center">
      <div className="text-center mb-6">
        <p className="text-bttonColour">My Clients Say</p>
        <h1 className="text-4xl font-semibold">Testimonials</h1>
      </div>
      <Swiper
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="px-10 py-10 rounded-md bg-boxColour cursor-grab">
              <FaQuoteLeft className="inline mr-2" />
              <p className="text-start text-sm inline">{item.review}</p>
              <FaQuoteRight className="inline ml-2" />
              <h2 className="font-semibold mt-4">{item.date}</h2>
              <div className="flex gap-3 mt-5 items-center">
                <div className="w-15">
                  <img className="rounded-full" src={item.image} alt="" />
                </div>
                <div>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-sm">
                    {item.position} of {item.company}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReview;
