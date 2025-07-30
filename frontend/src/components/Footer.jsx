const date = new Date();
import aboutImage from "../assets/LogoMehedi.png";
import { TbSend2 } from "react-icons/tb";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const Footer = () => {
  return (
    <footer className="bg-boxColour text-white">
      <div className="container mx-auto px-5 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Logo and copyright */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <img src={aboutImage} className="w-36 md:w-48" alt="Mehedi | Logo" />
          <p>© Mehedi Hassan. All rights reserved {date.getFullYear()}</p>
        </motion.div>

        {/* Important Links */}
        <div>
          <motion.h3
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-lg font-semibold mb-3"
          >
            Important Links
          </motion.h3>
          <motion.ul
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="space-y-2"
          >
            <li>
              <a
                href="https://www.fiverr.com/s/GzQ3lV7"
                target="_blank"
                className="hover:text-bttonColour transition"
              >
                Fiverr
              </a>
            </li>
            <li>
              <a
                href="https://www.freelancer.com/u/mdmehedihassan06"
                target="_blank"
                className="hover:text-bttonColour transition"
              >
                Freelancer
              </a>
            </li>
            <li>
              <a
                href="https://codeforces.com/profile/mehedi028"
                target="_blank"
                className="hover:text-bttonColour transition"
              >
                Codeforces
              </a>
            </li>
          </motion.ul>
        </div>

        {/* Subscribe & Social */}
        <div>
          <motion.h3
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-lg font-semibold mb-3"
          >
            Subscribe Me
          </motion.h3>

          {/* Social Icons */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex justify-center md:justify-start gap-4 mb-4 flex-wrap"
          >
            <FaGithub className="hover:text-bttonColour cursor-pointer text-xl transition-transform hover:-translate-y-1" />
            <FaLinkedinIn className="hover:text-bttonColour cursor-pointer text-xl transition-transform hover:-translate-y-1" />
            <FaInstagram className="hover:text-bttonColour cursor-pointer text-xl transition-transform hover:-translate-y-1" />
            <FaFacebookF className="hover:text-bttonColour cursor-pointer text-xl transition-transform hover:-translate-y-1" />
            <FaYoutube className="hover:text-bttonColour cursor-pointer text-xl transition-transform hover:-translate-y-1" />
          </motion.div>

          {/* Email Subscribe Form */}
          <form>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex flex-row items-center gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="border border-bttonColour bg-transparent py-2 px-3 rounded-md outline-none text-sm w-full sm:w-auto"
              />
              <button
                type="submit"
                className="flex items-center text-sm gap-2 border-2 border-bttonColour bg-[#e20c4b] text-white py-2 px-4 rounded hover:opacity-90 transition w-full sm:w-auto justify-center"
              >
                <TbSend2 />
                Subscribe
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
