import { assets } from "../assets/assets";
import { BiSupport, BiSolidBriefcase } from "react-icons/bi";
import { FaAward } from "react-icons/fa6";
import { TbSend2 } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const AboutMe = () => {
  return (
    <div id="about" className="container mx-auto px-5 overflow-hidden py-10">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center"
      >
        <p className="text-bttonColour">Intro</p>
        <h1 className="text-4xl font-semibold">About Me</h1>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="basis-[50%]"
        >
          <img
            className="w-full md:w-[60%] block mx-auto"
            src={assets.aboutImage}
            alt=""
          />
        </motion.div>

        <div className="basis-[50%]">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className=" text-center md:text-start text-[1.5rem] mb-4 font-[600]"
          >
            Hi, I am Mehedi Hassan, Based in Bangladesh!
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-center md:text-start text-sm"
          >
            A passionate Full Stack Developer specializing in the MERN stack
            with experience in WordPress development and website maintenance. I
            have worked on various projects, including Doctor Management, Task
            Manager, Todo, Car Rental, and Portfolio applications.
            <br />
            <br />I am also an ICPC 2024 participant and currently working at
            Pool Nation as a WordPress Developer & Website Maintenance
            personnel. My goal is to become a Software Engineer, build a
            community, and contribute to the tech industry.
          </motion.p>

          <div className="flex flex-row gap-3 mt-7">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="bg-boxColour px-5 md:px-10 py-2 md:py-4 rounded text-center"
            >
              <FaAward className="text-bttonColour text-2xl block mx-auto mb-1" />
              <h3 className="text-sm md:text-lg font-semibold">Experiences</h3>
              <p className="text-xs md:text-sm">2+ Years</p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="bg-boxColour px-5 md:px-10 py-2 md:py-4 rounded text-center"
            >
              <BiSolidBriefcase className="text-bttonColour text-2xl block mx-auto mb-1" />
              <h3 className="text-sm md:text-lg font-semibold">Complited</h3>
              <p className="text-xs md:text-sm">60 + Projects</p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="bg-boxColour px-5 md:px-10 py-2 md:py-4 rounded text-center"
            >
              <BiSupport className="text-bttonColour text-2xl block mx-auto mb-1" />
              <h3 className="text-sm md:text-lg font-semibold">Support</h3>
              <p className="text-xs md:text-sm">Online 24/7</p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="inline-flex gap-2 items-center bg-[#e20c4b] px-[1.4rem] mt-5 py-4 cursor-pointer rounded"
          >
            <TbSend2 />
            <button className=" cursor-pointer">Contact Me</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
