import mehedi from "../assets/team/mehedi.png";
import zillur from "../assets/team/zillur.png";
import joy from "../assets/team/joy.png";
import sojib from "../assets/team/sojib.png";
import nirob from "../assets/team/nirob.png";
import NazmulHaque from "../assets/team/NazmulHaque.png";
import JubaerRafi from "../assets/team/JubaerRafi.png";
import sabbir from "../assets/team/SabbirMiya.png";

import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/varients";

const ourTeam = [
  {
    _id: 1,
    name: "Mehedi Hassan",
    image: mehedi,
    position: "Team Leader",
    description: "Leading the team with a vision for scalable web solutions.",
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
    description:
      "Crafting intuitive user experiences and pixel-perfect designs.",
    social: {
      facebook: "https://www.facebook.com/zillurhmn",
      instagram: "https://www.instagram.com/zillurhmn",
    },
  },
  {
    _id: 3,
    name: "Emon Saha Joy",
    image: joy,
    position: "Junior UI/UX Designer",
    description: "Assisting in design systems and creating visual assets.",
    social: {
      facebook: "https://www.facebook.com/emonsahajoy33",
      instagram: "https://www.instagram.com/_joy_33_",
    },
  },
  {
    _id: 4,
    name: "MD Sojib Miah",
    image: sojib,
    position: "Frontend Developer",
    description: "Specializing in React.js and modern frontend architectures.",
    social: {
      facebook: "https://www.facebook.com/mdsajibmiah21",
      instagram: "https://www.instagram.com/sojib_error",
    },
  },
  {
    _id: 5,
    name: "Nahiyan Khan Nirob",
    image: nirob,
    position: "Flutter Developer",
    description:
      "Building cross-platform mobile applications with high performance.",
    social: {
      facebook: "https://www.facebook.com/nahiyannirob109",
      instagram: "https://www.instagram.com/nahiyan_khan_nirob",
    },
  },
  {
    _id: 6,
    name: "Nazmul Haque",
    image: NazmulHaque,
    position: "SEO Specialist",
    description:
      "Optimizing content and strategy to rank high on search engines.",
    social: {
      facebook: "https://www.facebook.com/nh.ratan.33",
    },
  },
  {
    _id: 7,
    name: "Jubaer Rafi",
    image: JubaerRafi,
    position: "Digital Marketer",
    description: "Driving growth through social media and brand promotion.",
    social: {
      facebook: "https://www.facebook.com/jubaerrafii",
      instagram: "https://www.instagram.com/jubaer.rafi/",
    },
  },
  {
    _id: 8,
    name: "Sabbir Miya",
    image: sabbir,
    position: "Graphic Designer",
    description: "Creating visually stunning graphics and brand identity.",
    social: {
      facebook: "https://www.facebook.com/sabbir.mia.77377692",
      instagram: "https://www.instagram.com/md_sabbir90",
    },
  },
];

const MyTeam = () => {
  return (
    <section
      id="team"
      className="relative w-full py-24 lg:py-32 bg-[#0f0f13] overflow-hidden"
    >
      {/* ==================== BACKGROUND AMBIENCE (FIXED) ==================== */}
      {/* Top Left - Purple Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Bottom Right - Red Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#e20c4b]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ==================== HEADER ==================== */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
            <span className="text-[#e20c4b] font-medium tracking-widest uppercase text-sm">
              Teamwork = Dream Work
            </span>
            <span className="w-10 h-[2px] bg-[#e20c4b]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              The Experts
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A group of passionate individuals working together to build amazing
            digital experiences.
          </p>
        </motion.div>

        {/* ==================== TEAM GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ourTeam.map((member, index) => (
            <motion.div
              key={member._id}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="group relative h-[420px] bg-[#16161d] rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              {/* 1. NEON BORDER EFFECT */}
              <div className="absolute inset-0 border-2 border-white/5 rounded-2xl z-20 transition-all duration-500 group-hover:border-[#e20c4b]/50 group-hover:shadow-[inset_0_0_20px_rgba(226,12,75,0.2)] pointer-events-none" />

              {/* 2. IMAGE LAYER */}
              <div className="absolute inset-0 w-full h-full bg-[#16161d]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                {/* Red Tint (Visible by default, removed on hover) */}
                <div className="absolute inset-0 bg-[#e20c4b]/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />

                {/* Gradient (Ensures white text is readable at the bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-all duration-500 group-hover:opacity-100" />
              </div>

              {/* 3. SLIDE-UP REVEAL ANIMATION */}
              <div
                className="absolute bottom-0 left-0 w-full p-6 z-30 
                transform translate-y-[88px] group-hover:translate-y-0 
                transition-transform duration-500 ease-out"
              >
                {/* Name & Position (Visible initially) */}
                <div className="mb-4 text-center group-hover:text-left transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                    {member.name}
                  </h3>
                  <p className="text-[#e20c4b] font-bold text-xs uppercase tracking-widest bg-black/30 inline-block px-2 py-1 rounded backdrop-blur-sm">
                    {member.position}
                  </p>
                </div>

                {/* Description & Socials (Revealed on Hover) */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="w-10 h-[2px] bg-[#e20c4b] mb-3"></div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {member.description ||
                      "Passionate expert contributing to high-quality project delivery."}
                  </p>

                  <div className="flex items-center gap-3">
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-[#1877F2] hover:border-[#1877F2] flex items-center justify-center text-white transition-all hover:-translate-y-1"
                      >
                        <FaFacebook />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-[#E1306C] hover:border-[#E1306C] flex items-center justify-center text-white transition-all hover:-translate-y-1"
                      >
                        <FaInstagram />
                      </a>
                    )}
                    {member.social.website && (
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-[#00C896] hover:border-[#00C896] flex items-center justify-center text-white transition-all hover:-translate-y-1"
                      >
                        <TbWorldWww />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-black hover:border-white flex items-center justify-center text-white transition-all hover:-translate-y-1"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyTeam;
