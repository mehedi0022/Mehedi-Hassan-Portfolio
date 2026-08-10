import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const menuItem = [
  "About",
  "Services",
  "Pricing",
  "Process",
  "Skills",
  "Education",
  "Work",
  "Inquiry",
  "FAQ",
  "Team",
  "Contact",
];

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-[100px] bg-primary border-r border-r-boxColour flex-col justify-between items-center py-6 text-white z-50">
        <Link
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
          to="/"
          onClick={() => navigateTo("home")}
        >
          <img
            src={assets.favIcon}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </Link>

        <nav className="flex flex-col gap-6 mt-4">
          {menuItem.map((item, index) => (
            <button
              key={index}
              onClick={() => navigateTo(item.toLowerCase())}
              className="text-gray-400 hover:text-[#e20c4b] text-sm uppercase tracking-widest font-medium cursor-pointer transition-colors duration-300 [writing-mode:vertical-lr] hover:scale-110 p-2"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="mb-2">
          <a
            href="https://wa.me/8801621905416"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaWhatsapp className="text-gray-400 group-hover:text-green-500 text-3xl transition-colors duration-300" />
          </a>
        </div>
      </aside>

      <header
        className={`lg:hidden fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled || isMobileMenuOpen
            ? "bg-[#16161D]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Link to="/" onClick={() => navigateTo("home")}>
          <img
            src={assets.favIcon}
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      <div
        className={`fixed inset-0 bg-[#16161D] z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {menuItem.map((item, index) => (
            <button
              key={index}
              onClick={() => navigateTo(item.toLowerCase())}
              className="text-2xl font-semibold text-gray-300 hover:text-[#e20c4b] transition-colors duration-300 uppercase tracking-wider"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="mt-12">
          <a
            href="https://wa.me/8801621905416"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-500 border border-green-500 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
