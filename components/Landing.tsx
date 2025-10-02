import HeroSection from './HeroSection'
import ProjectSection from './ProjectSection'
import DesignsSection from './DesignsSection'
import SkillsSection from './SkillsSection'
import FloatingDock from './FloatingDock'

const Landing = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col flex-wrap items-center bg-blue-50 px-4 transition-colors duration-300 sm:px-20 dark:bg-neutral-950">
      <div
        className="fixed inset-0 top-0 z-0 hidden dark:inline"
        style={{
          backgroundImage: `
          linear-gradient(to right, var(--color-neutral-800) 1px, transparent 1px),
          linear-gradient(to bottom, var(--color-neutral-800) 1px, transparent 1px)
        `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 0',
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
            transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />

      <div
        className="fixed inset-0 top-0 z-0 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-neutral-300) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-neutral-300) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 0',
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
            transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />

      <div className="relative flex max-w-2xl flex-col">
        <HeroSection />
        <ProjectSection />
        <DesignsSection />
        <SkillsSection />
        <FloatingDock />
      </div>
    </div>
  )
}

export default Landing
