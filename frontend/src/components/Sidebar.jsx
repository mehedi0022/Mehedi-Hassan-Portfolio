import { useNavigate, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaWhatsapp } from "react-icons/fa";

const menuItem = [
  "About",
  "Services",
  "Skills",
  "Education",
  "Work",
  "Team",
  "Contact",
];

const Sidebar = () => {
  const navigateTo = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-[100px] bg-primary border-r border-r-boxColour flex flex-col justify-between items-center py-5 text-white">
      <Link
        className="text-2xl font-bold cursor-pointer"
        to="/"
        onClick={() => navigateTo("home")}
      >
        {/* Logo or Name */}
        <img src={assets.favIcon} alt="" />
      </Link>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-12 mt-10">
        {menuItem.map((item, index) => (
          <p
            key={index}
            onClick={() => navigateTo(item.toLowerCase())}
            className="hover:text-gray-400 text-center py-2 cursor-pointer transform rotate-90"
          >
            {item}
          </p>
        ))}
      </nav>

      {/* WhatsApp Icon */}
      <div className="mb-5">
        <a
          href="https://wa.me/8801621905416"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-green-500 text-3xl hover:text-green-400" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
