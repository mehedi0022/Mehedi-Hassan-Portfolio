import { services } from "../assets/assets";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const Services = () => {
  return (
    <div id="services" className="container px-5 mx-auto py-10">
      <div className="text-center">
        <p className="text-bttonColour ">What I Do</p>
        <h1 className="text-4xl font-semibold">Services</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <motion.div
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            key={service._id}
            className="my-8 p-6 border border-boxColour bg-primary rounded-lg shadow-lg"
          >
            <img
              src={service.icon}
              alt=""
              className="w-20 h-20 mb-4 bg-boxColour p-3 object-cover rounded-full"
            />
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
