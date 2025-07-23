import AboutMe from "../components/AboutMe";
import ClientReview from "../components/ClientReview";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Hero from "../components/Hero";
import MyTeam from "../components/MyTeam";
import RecentWork from "../components/RecentWork";
import Services from "../components/Services";
import Skilles from "../components/Skilles";

const Home = () => {
  return (
    <div className="ml-0 md:ml-[100px] mx-auto">
      <Hero />
      <AboutMe />
      <Services />
      <Skilles />
      <Education />
      <RecentWork />
      <ClientReview />
      <MyTeam />
      <Contact />
    </div>
  );
};

export default Home;
