import AboutMe from "../components/AboutMe";
import ClientReview from "../components/ClientReview";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Hero from "../components/Hero";
import MyTeam from "../components/MyTeam";
import RecentWork from "../components/RecentWork";
import Services from "../components/Services";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="ml-0 md:ml-[100px] mx-auto">
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Education />
      <RecentWork />
      <ClientReview />
      <MyTeam />
      <Contact />
    </div>
  );
};

export default Home;
