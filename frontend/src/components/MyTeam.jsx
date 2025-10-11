import mehedi from "../assets/team/mehedi.png";
import zillur from "../assets/team/zillur.png";
import joy from "../assets/team/joy.png";
import sojib from "../assets/team/sojib.png";
import nirob from "../assets/team/nirob.png";
import NazmulHaque from "../assets/team/NazmulHaque.png";
import JubaerRafi from "../assets/team/JubaerRafi.png";
import sabbir from "../assets/team/SabbirMiya.png";

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
      facebook: "https://www.facebook.com/meetmehedi.dev",
      instagram: "https://www.instagram.com/meetmehedi.dev/",
      website: "http://meetmehedi.dev/",
    },
  },

  {
    _id: 2,
    name: "Zillur Rahman",
    image: zillur,
    position: "Senior UI/UX Designer",
    description: "Simple Demo Description",
    social: {
      facebook: "https://www.facebook.com/zillurhmn",
      instagram: "https://www.instagram.com/zillurhmn",
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
      facebook: "https://www.facebook.com/emonsahajoy33",
      instagram: "https://www.instagram.com/_joy_33_",
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
      facebook: "https://www.facebook.com/mdsajibmiah21",
      instagram: "https://www.instagram.com/sojib_error",
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
      facebook: "https://www.facebook.com/nahiyannirob109",
      instagram: "https://www.instagram.com/nahiyan_khan_nirob",
      website: "#",
    },
  },
  {
    _id: 6,
    name: "Nazmul Haque",
    image: NazmulHaque,
    position: "SEO Specialist",
    description:
      "Nazmul is an expert in search engine optimization, ensuring our website ranks high on search engines.",
    social: {
      facebook: "https://www.facebook.com/nh.ratan.33",
      github: "#",
      instagram: "#",
      website: "#",
    },
  },
  {
    _id: 7,
    name: "Jubaer Rafi",
    image: JubaerRafi,
    position: "Digital Marketer",
    description:
      "Jubaer is a skilled digital marketer, specializing in social media marketing and online brand promotion.",
    social: {
      facebook: "https://www.facebook.com/jubaerrafii",
      instagram: "https://www.instagram.com/jubaer.rafi/",
      website: "#",
    },
  },
  {
    _id: 8,
    name: "Sabbir Miya",
    image: sabbir,
    position: "Graphic Designer",
    description:
      "Sabbir is a talented graphic designer, creating visually stunning designs for our projects.",
    social: {
      facebook: "https://www.facebook.com/sabbir.mia.77377692",
      instagram: "https://www.instagram.com/md_sabbir90",
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
                  alt={member.name}
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
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-xl text-[#1877F2] hover:scale-115 cursor-pointer transition-transform duration-300" />
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-xl text-[#E1306C] hover:scale-115 cursor-pointer transition-transform duration-300" />
                  </a>
                  <a
                    href={member.social.website}
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
