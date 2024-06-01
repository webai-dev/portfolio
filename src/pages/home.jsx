import HeroSection from "../components/HomePage/heroSection";
import AboutSection from "../components/HomePage/aboutSection";
import EducationSection from "../components/HomePage/educationSection";
import SkillsSection from "../components/HomePage/skillsSection";
import ExperienceSection from "../components/HomePage/experienceSection";
import ProfileSection from "../components/HomePage/profileSection";
import PortfolioSection from "../components/HomePage/portfolioSection";
import ContactSection from "../components/HomePage/contactSection";
import ClientSection from "../components/HomePage/clientSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProfileSection />
      <PortfolioSection />
      {/* <ClientSection /> */}
      <ContactSection />
    </>
  )
}

export default Home;
