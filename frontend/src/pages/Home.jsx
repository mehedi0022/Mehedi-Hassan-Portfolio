import AboutMe from "../components/AboutMe";
import ClientReview from "../components/ClientReview";
import Contact from "../components/Contact";
import Education from "../components/Education";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import MyTeam from "../components/MyTeam";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import ProjectInquiry from "../components/ProjectInquiry";
import RecentWork from "../components/RecentWork";
import Services from "../components/Services";
import Skills from "../components/Skills";
import StickyFiverrCTA from "../components/StickyFiverrCTA";

const Home = () => {
  return (
    <div className="ml-0 md:ml-[100px] mx-auto">
      <Hero />
      <AboutMe />
      <Services />
      <Pricing />
      <Process />
      <Skills />
      <Education />
      <RecentWork />
      <ClientReview />
      <ProjectInquiry />
      <FAQ />
      <MyTeam />
      <Contact />
      <StickyFiverrCTA />
    </div>
  );
};

export default Home;
