"use client";

import { motion } from "motion/react";

const SkillsSection = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwindcss",
    "Figma",
    "Node.js",
    "Express.js",
    "Mongodb",
    "Postgresql",
  ];

  return (
    <div className="my-16 w-full gap-4 flex flex-col max-w-2xl">
      <motion.h1
        initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Skills —
      </motion.h1>
      <div className="flex flex-wrap gap-2 max-w-full">
        {skills.map((skill, idx) => (
          <motion.span
            initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            key={idx}
            className="px-2 py-1 rounded-md bg-neutral-900 border border-neutral-800"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
