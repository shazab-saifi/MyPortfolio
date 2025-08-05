import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import DesignsSection from "./DesignsSection";
import SkillsSection from "./SkillsSection";
import ThemeButton from "./ThemeButton";

const Landing = () => {
  return (
    <div className="flex min-h-screen w-full flex-col flex-wrap items-center bg-neutral-50 px-4 transition-colors duration-300 sm:px-20 dark:bg-neutral-950">
      <div className="relative max-w-2xl">
        <ThemeButton />
        <HeroSection />
        <ProjectSection />
        <DesignsSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default Landing;
