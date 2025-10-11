import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaRegUser,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import mehedi from "../assets/Mehedi.jpg";
import { ReactTyped } from "react-typed";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const Hero = () => {
  const navigateTo = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      id="home"
      className="mx-5 md:mx-0 min-h-[100vh] md:bg-[url(/hero_bg.jpg)] bg-cover bg-center"
    >
      <div className="container mx-auto">
        <div className="md:max-w-[700px] h-[100vh] flex flex-col gap-20 justify-center md:justify-around">
          <div>
            <div className="block md:hidden">
              <img
                className="w-[250px] mx-auto p-0 mt-2.5 border-2 border-bttonColour"
                src={mehedi}
                alt=""
              />
            </div>
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex md:flex-row items-center justify-center md:justify-start mt-3.5 gap-0.5 text-white"
            >
              <p className="text-xl md:text-xl">Follow Me - </p>
              <div className="flex flex-row gap-2 md:gap-3.5 ml-2">
                <FaGithub
                  onClick={() =>
                    window.open("https://github.com/mehedi0022", "_blank")
                  }
                  className="hover:text-bttonColour cursor-pointer text-xl md:text-xl hover:-translate-y-1 duration-300"
                />
                <FaLinkedinIn
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/meetmehedi-dev/",
                      "_blank"
                    )
                  }
                  className="hover:text-bttonColour cursor-pointer text-xl md:text-xl hover:-translate-y-1 duration-300"
                />
                <FaInstagram
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/meetmehedi.dev/",
                      "_blank"
                    )
                  }
                  className="hover:text-bttonColour cursor-pointer text-xl md:text-xl hover:-translate-y-1 duration-300"
                />
                <FaFacebookF
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/meetmehedi.dev",
                      "_blank"
                    )
                  }
                  className="hover:text-bttonColour cursor-pointer text-xl md:text-xl hover:-translate-y-1 duration-300"
                />
                <FaGooglePlay
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/dev?id=5362473091268240728",
                      "_blank"
                    )
                  }
                  className="hover:text-bttonColour cursor-pointer text-xl md:text-xl hover:-translate-y-1 duration-300"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-0">
              Hi, I&apos;am Mehedi Hassan
            </h2>

            <ReactTyped
              loop
              backSpeed={50}
              onBegin={function noRefCheck() {}}
              onDestroy={function noRefCheck() {}}
              onLastStringBackspaced={function noRefCheck() {}}
              onStringTyped={function noRefCheck() {}}
              strings={[
                "MERN Stack Developer",
                "React Js | Express Js | Node Js | Mongo DB | Next Js",
                "HTML 5 | CSS 3 | Bootstrap 5 | Tailwind CSS ",
                "JavaScript | C | C++",
                "Firebase | Git | Github | Figma",
              ]}
              typeSpeed={50}
              typedRef={function noRefCheck() {}}
              className="text-bttonColour font-normal text-sm md:text-xl mb-2"
            />

            <p className="text-sm mb-4">
              A passionate Full Stack Developer specializing in the MERN stack.
              I have worked on various projects, including Doctor Management,
              Task Manager, Todo, Car Rental, and Portfolio applications.
            </p>

            <div
              onClick={() => {
                navigateTo("about");
              }}
              className="inline-flex gap-2 items-center mt-3 bg-[#e20c4b] px-[1.4rem] py-3 md:py-4 cursor-pointer hover:bg-black transition-all duration-500 rounded"
            >
              <FaRegUser />
              <button>More About Me</button>
            </div>
          </motion.div>

          <div className="hidden md:flex gap-10">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex gap-3 items-center cursor-pointer"
            >
              <div>
                <FaPhone className="text-2xl text-[#e20c4b]" />
              </div>
              <div>
                <h2 className="font-semibold text-[.875rem] ">Phone</h2>
                <a className="font-light" href="tel:+8801621905416">
                  +8801621905416
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex gap-3 items-center cursor-pointer"
            >
              <div>
                <FaEnvelope className="text-2xl text-[#e20c4b]" />
              </div>
              <div>
                <h2 className="font-semibold text-[.875rem] ">Email</h2>
                <a
                  className="font-light"
                  href="mailto:mdmehedihassan0022@gmail.com"
                >
                  mdmehedihassan0022@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
