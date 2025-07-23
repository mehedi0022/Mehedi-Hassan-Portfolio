import { MdCastForEducation } from "react-icons/md";
import { SiEducative } from "react-icons/si";
const Education = () => {
  return (
    <div id="about" className="container mx-auto px-5 py-10">
      <div className="text-center">
        <p className="text-bttonColour ">My Journey</p>
        <h1 className="text-4xl font-semibold">Qualification</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-10 justify-center">
        <div>
          <div className="flex items-center gap-4">
            <MdCastForEducation className="text-2xl" />
            <h1 className="text-2xl font-bold">Education</h1>
          </div>
          <div className="group mt-7 pl-[3rem] relative before:content-[''] before:w-[1px] before:top-0 before:left-[.45rem] before:absolute before:h-full before:bg-bttonColour cursor-pointer z-1">
            <div className="absolute w-[1rem] h-[1rem] left-0 top-0 border-2 border-bttonColour rounded-full bg-bttonColour group-hover:bg-black transition-all duration-300 z-2"></div>
            <h1 className="text-[1rem] font-medium">
              City University, Berulia, Saver, Dhaka
            </h1>
            <h1 className="text-[.813rem] mb-2">Depertment of CSE</h1>
            <h1 className="text-bttonColour text-[.875rem]">
              2021-2025 | CGPA: 3.33 Out of 4.0
            </h1>
          </div>
          <div className="group mt-7 pl-[3rem] relative before:content-[''] before:w-[1px] before:top-0 before:left-[.45rem] before:absolute before:h-full before:bg-bttonColour cursor-pointer z-1">
            <div className="absolute w-[1rem] h-[1rem] left-0 top-0 border-2 border-bttonColour rounded-full bg-bttonColour group-hover:bg-black transition-all duration-300 z-2"></div>
            <h1 className="text-[1rem] font-medium">
              Ideal Collage Dhanmondi, Dhaka
            </h1>
            <h1 className="text-[.813rem] mb-2">
              Complited HSC | Group: Science
            </h1>
            <h1 className="text-bttonColour text-[.875rem]">
              2018-2020 | GPA: 4.83 Out of 5.0
            </h1>
          </div>
          <div className="group mt-7 pl-[3rem] relative before:content-[''] before:w-[1px] before:top-0 before:left-[.45rem] before:absolute before:h-full before:bg-bttonColour cursor-pointer z-1">
            <div className="absolute w-[1rem] h-[1rem] left-0 top-0 border-2 border-bttonColour rounded-full bg-bttonColour group-hover:bg-black transition-all duration-300 z-2"></div>
            <h1 className="text-[1rem] font-medium">
              Nayankhan Memorial High School, Nagarpur, Tangail
            </h1>
            <h1 className="text-[.813rem] mb-2">
              Complited SSC | Group: Science
            </h1>
            <h1 className="text-bttonColour text-[.875rem]">
              2016-2018 | CGPA: 4.50 Out of 5.0
            </h1>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <SiEducative className="text-2xl" />
            <h1 className="text-2xl font-bold">Experience</h1>
          </div>
          <div className="group mt-7 pl-[3rem] relative before:content-[''] before:w-[1px] before:top-0 before:left-[.45rem] before:absolute before:h-full before:bg-bttonColour cursor-pointer z-1">
            <div className="absolute w-[1rem] h-[1rem] left-0 top-0 border-2 border-bttonColour rounded-full bg-bttonColour group-hover:bg-black transition-all duration-300 z-2"></div>
            <h1 className="text-[1rem] font-medium">Pool Nation</h1>
            <h1 className="text-[.813rem] mb-2">
              Web Developer and Vertual Assestent
            </h1>
            <h1 className="text-bttonColour text-[.875rem]">2021-Present</h1>
          </div>
          <div className="group mt-7 pl-[3rem] relative before:content-[''] before:w-[1px] before:top-0 before:left-[.45rem] before:absolute before:h-full before:bg-bttonColour cursor-pointer z-1">
            <div className="absolute w-[1rem] h-[1rem] left-0 top-0 border-2 border-bttonColour rounded-full bg-bttonColour group-hover:bg-black transition-all duration-300 z-2"></div>
            <h1 className="text-[1rem] font-medium">Fiverr.Com</h1>
            <h1 className="text-[.813rem] mb-2">Level One Seller</h1>
            <h1 className="text-bttonColour text-[.875rem]">2022-Present</h1>
          </div>
          <div className="group mt-7 pl-[3rem] relative before:content-[''] before:w-[1px] before:top-0 before:left-[.45rem] before:absolute before:h-full before:bg-bttonColour cursor-pointer z-1">
            <div className="absolute w-[1rem] h-[1rem] left-0 top-0 border-2 border-bttonColour rounded-full bg-bttonColour group-hover:bg-black transition-all duration-300 z-2"></div>
            <h1 className="text-[1rem] font-medium">Freelancer.com</h1>
            <h1 className="text-[.813rem] mb-2">I have Complited 31 Project</h1>
            <h1 className="text-bttonColour text-[.875rem]">2020-2021</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
