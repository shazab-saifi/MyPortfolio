'use client'

import { motion } from 'motion/react'

const BackgroundGrid = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, filter: 'blue(10px)' }}
        whileInView={{ opacity: 1, filter: 'blue(0px)' }}
        transition={{ duration: 1, delay: 1 }}
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

      <motion.div
        initial={{ opacity: 0, filter: 'blue(10px)' }}
        whileInView={{ opacity: 1, filter: 'blue(0px)' }}
        transition={{ duration: 1, delay: 1 }}
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
    </div>
  )
}

export default BackgroundGrid
