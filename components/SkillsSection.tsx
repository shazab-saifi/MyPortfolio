"use client"

import { motion } from "motion/react";

const SkillsSection = () => {
  return (
    <div className="mt-16 w-full flex items-center justify-center">
      <div className="space-y-4 max-w-[600px]">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl"
        >
          My Skills
        </motion.h1>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >cannot be a descendant of
          Frontend: <br /><span className="opacity-70">React.js, Next.js, Redux, Recoil, TypeScript, Tailwind CSS
            (Custom Breakpoints, Animations), Responsive Design.</span>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Backend: <br /><span className="opacity-70">Node.js, Express.js, MongoDB, PostgreSQL, Prisma,
            RESTful APIs.</span>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          Tools & Workflow: <br /><span className="opacity-70">Git, GitHub, Linux (Ubuntu), WSL, Zsh.</span>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsSection