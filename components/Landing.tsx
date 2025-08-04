import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import DesignsSection from "./DesignsSection";

const Landing = () => {
  return (
    <div className="sm:px-20 px-4 w-full min-h-screen flex flex-col items-center">
      <div>
        <HeroSection />
        <ProjectSection />
        <DesignsSection />
      </div>
    </div>
  );
};

export default Landing;
