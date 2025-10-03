'use client'

import { motion } from 'motion/react'

const SkillsSection = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Tailwindcss',
    'Figma',
    'Node.js',
    'Express.js',
    'Mongodb',
    'Postgresql',
  ]

  return (
    <div className="md:gap- mt-12 mb-26 flex w-full max-w-2xl flex-col gap-6 md:mt-16">
      <motion.h1
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl font-semibold text-neutral-800 transition-colors duration-300 md:text-2xl dark:text-white"
      >
        Skills —
      </motion.h1>
      <div className="flex max-w-full flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span
            initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            key={idx}
            className="rounded-md border border-blue-100 bg-blue-50 px-2 py-1 text-neutral-800 transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
