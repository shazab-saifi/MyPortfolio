import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";

const Landing = () => {
  return (
    <div className="sm:px-20 px-4 w-full min-h-screen flex flex-col items-center">
      <div>
        <HeroSection />
        <ProjectSection />
      </div>
    </div>
  );
};

export default Landing;
