import { assets } from "../assets/assets";
import { FaWhatsapp } from "react-icons/fa";

const menuItem = ["Home", "About", "Skills", "Work", "Services", "Contact"];

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-[100px] bg-primary border-r border-r-boxColour flex flex-col justify-between items-center py-5 text-white">
      <div className="text-2xl font-bold">
        <img src={assets.favIcon} alt="" />
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-12 mt-10">
        {menuItem.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="hover:text-gray-400 text-center py-2 transform rotate-90"
          >
            {item}
          </a>
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
