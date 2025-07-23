import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaRegUser,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import mehedi from "../assets/Mehedi.jpg";

import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="mx-5 md:mx-0 min-h-[100vh] md:bg-[url(./hero_bg.jpg)] bg-cover bg-center">
      <div className="container mx-auto">
        <div className="md:max-w-[700px] h-[100vh] flex flex-col gap-20 justify-center md:justify-around">
          <div className="">
            <div className="block md:hidden">
              <img
                className="w-[250px] mx-auto p-0 mt-2.5 border-2 border-bttonColour"
                src={mehedi}
                alt=""
              />
            </div>
            <div className="flex md:flex-row items-center justify-center md:justify-start mt-3.5 gap-0.5 text-white">
              <p className="text-xl md:text-xl">Follow Me - </p>
              <div className="flex flex-row gap-2 md:gap-3.5 ml-2">
                <FaGithub className="hover:text-bttonColour cursor-pointer text-xl md:text-xl hover:-translate-y-1 duration-300" />
                <FaLinkedinIn className="hover:text-bttonColour cursor-pointer text-xl md:text-xl hover:-translate-y-1 duration-300" />
                <FaInstagram className="hover:text-bttonColour cursor-pointer text-xl md:text-xl hover:-translate-y-1 duration-300" />
                <FaFacebookF className="hover:text-bttonColour cursor-pointer text-xl md:text-xl hover:-translate-y-1 duration-300" />
                <FaYoutube className="hover:text-bttonColour cursor-pointer text-xl md:text-xl hover:-translate-y-1 duration-300" />
              </div>
            </div>
          </div>

          <div>
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

            <div className="inline-flex gap-2 items-center mt-3 bg-[#e20c4b] px-[1.4rem] py-3 md:py-4 cursor-pointer hover:bg-black transition-all duration-500 rounded">
              <FaRegUser />
              <button>More About Me</button>
            </div>
          </div>

          <div className="hidden md:flex gap-10">
            <div className="flex gap-3 items-center cursor-pointer">
              <div>
                <FaPhone className="text-2xl text-[#e20c4b]" />
              </div>
              <div>
                <h2 className="font-semibold text-[.875rem] ">Phone</h2>
                <a className="font-light" href="tel:+8801621905416">
                  +8801621905416
                </a>
              </div>
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
