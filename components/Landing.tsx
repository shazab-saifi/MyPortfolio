import HeroSection from './HeroSection'
import ProjectSection from './ProjectSection'
import DesignsSection from './DesignsSection'
import SkillsSection from './SkillsSection'
import Dock from './Dock'
import BackgroundGrid from './BackgroundGrid'

const Landing = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col flex-wrap items-center bg-blue-50 px-4 transition-colors duration-300 sm:px-20 dark:bg-neutral-950">
      <BackgroundGrid />
      <div className="relative flex max-w-2xl flex-col">
        <HeroSection />
        <ProjectSection />
        <DesignsSection />
        <SkillsSection />
        <Dock />
      </div>
    </div>
  )
}

export default Landing
