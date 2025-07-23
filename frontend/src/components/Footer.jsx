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

const Footer = () => {
  return (
    <footer className="bg-boxColour text-white">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Logo and copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={aboutImage} className="w-36 md:w-48" alt="Mehedi | Logo" />
          <p>© Mehedi Hassan. All rights reserved {date.getFullYear()}</p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-bttonColour transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-bttonColour transition">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-bttonColour transition">
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe Me</h3>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mb-4 flex-wrap">
            <FaGithub className="hover:text-bttonColour cursor-pointer text-xl transition-transform hover:-translate-y-1" />
            <FaLinkedinIn className="hover:text-bttonColour cursor-pointer text-xl transition-transform hover:-translate-y-1" />
            <FaInstagram className="hover:text-bttonColour cursor-pointer text-xl transition-transform hover:-translate-y-1" />
            <FaFacebookF className="hover:text-bttonColour cursor-pointer text-xl transition-transform hover:-translate-y-1" />
            <FaYoutube className="hover:text-bttonColour cursor-pointer text-xl transition-transform hover:-translate-y-1" />
          </div>

          {/* Email Subscribe Form */}
          <form className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full sm:w-auto flex-1 border border-bttonColour bg-transparent py-2 px-3 rounded-md outline-none text-sm"
            />
            <button
              type="submit"
              className="flex items-center gap-2 border-2 border-bttonColour bg-[#e20c4b] text-white py-2 px-4 rounded hover:opacity-90 transition"
            >
              <TbSend2 />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
