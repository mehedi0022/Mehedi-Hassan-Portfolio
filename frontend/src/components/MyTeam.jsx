import mehedi from "../assets/team/mehedi.png";
import zillur from "../assets/team/zillur.png";
import joy from "../assets/team/joy.png";
import sojib from "../assets/team/sojib.png";
import nirob from "../assets/team/nirob.png";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const ourTeam = [
  {
    _id: 1,
    name: "Mehedi Hassan",
    image: mehedi,
    position: "Team Leader",
    description: "Simple Demo Description",
    social: {
      facebook: "#",
      github: "#",
      innstagram: "#",
      website: "#",
    },
  },

  {
    _id: 2,
    name: "Zillur Rahman",
    image: zillur,
    position: "Senior UI/UX Designer",
    description: "Simple Demo Description",
    social: {
      facebook: "#",
      github: "#",
      innstagram: "#",
      website: "#",
    },
  },
  {
    _id: 3,
    name: "Emon Saha Joy",
    image: joy,
    position: "Junior UI/UX Designer",
    description: "Simple Demo Description",
    social: {
      facebook: "#",
      github: "#",
      innstagram: "#",
      website: "#",
    },
  },
  {
    _id: 4,
    name: "MD Sojib Miah",
    image: sojib,
    position: "Frontend Developer",
    description: "Simple Demo Description",
    social: {
      facebook: "#",
      github: "#",
      innstagram: "#",
      website: "#",
    },
  },
  {
    _id: 5,
    name: "Nahiyan Khan Nirob",
    image: nirob,
    position: "Flutter Developer",
    description: "Simple Demo Description",
    social: {
      facebook: "#",
      github: "#",
      innstagram: "#",
      website: "#",
    },
  },
];

const MyTeam = () => {
  return (
    <div id="team" className="container mx-auto px-5 py-10">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center"
      >
        <p className="text-bttonColour ">Teamwork = Dream Work</p>
        <h1 className="text-4xl font-semibold">My Team</h1>
      </motion.div>

      <div className="mt-5">
        <div className="grid grid-cols md:grid-cols-5 justify-center gap-5">
          {ourTeam.map((member, index) => (
            <motion.div
              key={member._id}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="bg-boxColour rounded-md p-5"
            >
              <div className="relative group w-fit">
                <img
                  src={member.image}
                  alt=""
                  className="rounded-md cursor-pointer w-full max-w-xs sm:max-w-sm"
                />

                <div
                  className="absolute top-2 left-2 
               bg-white/30 backdrop-blur-sm shadow-md 
               flex flex-col gap-3 px-2 py-3 rounded-xl 
               transition-all duration-300 ease-in-out

               opacity-100 translate-x-0
               sm:opacity-0 sm:-translate-x-5 sm:group-hover:opacity-100 sm:group-hover:translate-x-0"
                >
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-xl text-[#1877F2] hover:scale-115 cursor-pointer transition-transform duration-300" />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-xl text-[#E1306C] hover:scale-115 cursor-pointer transition-transform duration-300" />
                  </a>
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbWorldWww className="text-xl text-[#00C896] hover:scale-115 cursor-pointer transition-transform duration-300" />
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mt-2.5">{member.name}</h2>
                <p className="text-sm">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
