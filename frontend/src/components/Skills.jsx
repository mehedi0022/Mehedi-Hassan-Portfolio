import { useState } from "react";
import { skills } from "../assets/assets";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const Skills = () => {
  const [category, setCategory] = useState("Frontend");

  return (
    <div id="skills" className="container mx-auto px-5 py-10">
      <div className="text-center">
        <p className="text-bttonColour ">My Experience</p>
        <h1 className="text-4xl font-semibold">Skills</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-10 justify-center">
        <div className="md:basis-64 grid grid-cols-1 gap-4 text-center mt-8">
          <div
            className={`px-10 py-2 border border-boxColour rounded-md flex items-center justify-between cursor-pointer ${
              category === "Frontend"
                ? "bg-boxColour text-bttonColour border border-bttonColour"
                : ""
            }`}
            onClick={() => setCategory("Frontend")}
          >
            <p>Frontend </p>{" "}
            {category === "Frontend" ? (
              <span>
                <MdArrowRight className="text-3xl " />
              </span>
            ) : (
              <MdArrowDropDown className="text-3xl " />
            )}
          </div>
          <div
            className={`px-10 py-2 border border-boxColour rounded-md flex items-center justify-between cursor-pointer ${
              category === "Backend"
                ? "bg-boxColour text-bttonColour border border-bttonColour"
                : ""
            }`}
            onClick={() => setCategory("Backend")}
          >
            <p>Backend </p>
            {category === "Backend" ? (
              <span>
                <MdArrowRight className="text-3xl " />
              </span>
            ) : (
              <MdArrowDropDown className="text-3xl " />
            )}
          </div>
          <div
            className={`px-10 py-2 border border-boxColour rounded-md flex items-center justify-between cursor-pointer ${
              category === "Tools"
                ? "bg-boxColour text-bttonColour border border-bttonColour"
                : ""
            }`}
            onClick={() => setCategory("Tools")}
          >
            <p>Tools </p>
            {category === "Tools" ? (
              <span>
                <MdArrowRight className="text-3xl " />
              </span>
            ) : (
              <MdArrowDropDown className="text-3xl " />
            )}
          </div>
        </div>

        <div className="md:basis-230 mt-1 md:mt-8 grid grid-cols-1 md:grid-cols-3 items-start gap-2 md:gap-5">
          {skills
            .filter((skill) => skill.category === category)
            .map((skill, index) => (
              <motion.div
                variants={fadeIn("up", index * 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                key={index}
                className="bg-primary px-4 py-2 border border-boxColour rounded-md hover:bg-boxColour transition-all duration-300 cursor-pointer shadow-lg"
              >
                <div className="flex gap-5 items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-10 h-10 md:w-12 md:h-12 bg-boxColour p-2 rounded-md mb-2 mx-auto"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-semibold">
                      {skill.title}
                    </h3>
                    <p className="text-xs text-gray-500">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
