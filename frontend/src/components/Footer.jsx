import aboutImage from "../assets/LogoMehedi.png";
import { TbSend2 } from "react-icons/tb";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaGooglePlay,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const date = new Date();

const Footer = () => {
  return (
    <footer className="relative bg-[#0f0f13] text-white overflow-hidden pt-20 border-t border-white/5">
      {/* ==================== AMBIENT GLOWS ==================== */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#e20c4b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-3 mb-16">
          {/* ==================== COLUMN 1: BRANDING ==================== */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            <img
              src={aboutImage}
              className="w-40 md:w-48 brightness-110 filter drop-shadow-lg"
              alt="Mehedi | Logo"
            />
            <p className="text-gray-400 text-center lg:text-left leading-relaxed max-w-sm">
              Building scalable web solutions and creating digital experiences
              that matter. Let's code the future together.
            </p>
          </motion.div>

          {/* ==================== COLUMN 2: LINKS ==================== */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-[#e20c4b] rounded-full"></span>
            </h3>

            <ul className="space-y-4 text-center lg:text-left">
              <li>
                <a
                  href="https://www.fiverr.com/s/GzQ3lV7"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#e20c4b] hover:pl-2 transition-all duration-300 block"
                >
                  Fiverr Profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.freelancer.com/u/mdmehedihassan06"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#e20c4b] hover:pl-2 transition-all duration-300 block"
                >
                  Freelancer Account
                </a>
              </li>
              <li>
                <a
                  href="https://codeforces.com/profile/mehedi028"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#e20c4b] hover:pl-2 transition-all duration-300 block"
                >
                  Codeforces Stats
                </a>
              </li>
            </ul>
          </motion.div>

          {/* ==================== COLUMN 3: NEWSLETTER & SOCIAL ==================== */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Stay Connected
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-[#e20c4b] rounded-full"></span>
            </h3>

            {/* Newsletter Input */}
            <form className="w-full max-w-sm mb-8 relative">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#16161d] border border-white/10 rounded-full py-3 px-5 text-sm text-white focus:outline-none focus:border-[#e20c4b] transition-colors pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-[#e20c4b] hover:bg-[#c40a40] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg shadow-red-500/20"
                >
                  <TbSend2 className="text-lg" />
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="flex gap-4">
              <SocialIcon
                Icon={FaGithub}
                link="https://github.com/mehedi0022"
                color="hover:bg-gray-800"
              />
              <SocialIcon
                Icon={FaLinkedinIn}
                link="https://www.linkedin.com/in/meetmehedi-dev/"
                color="hover:bg-[#0077B5]"
              />
              <SocialIcon
                Icon={FaInstagram}
                link="https://www.instagram.com/meetmehedi.dev/"
                color="hover:bg-[#E1306C]"
              />
              <SocialIcon
                Icon={FaFacebookF}
                link="https://www.facebook.com/meetmehedi.dev"
                color="hover:bg-[#1877F2]"
              />
              <SocialIcon
                Icon={FaGooglePlay}
                link="https://play.google.com/store/apps/dev?id=5362473091268240728"
                color="hover:bg-[#3DDC84]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ==================== COPYRIGHT BAR ==================== */}
      <div className="border-t border-white/5 bg-[#0a0a0d] relative z-10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {date.getFullYear()} Mehedi Hassan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed & Built with <span className="text-[#e20c4b]">♥</span> by
            Mehedi
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for Social Icons
const SocialIcon = ({ Icon, link, color }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className={`w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white hover:-translate-y-1 ${color}`}
  >
    <Icon className="text-lg" />
  </a>
);

export default Footer;
